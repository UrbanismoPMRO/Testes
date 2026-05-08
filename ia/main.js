/**
 * main.js — OpenLayers XYZ Tile Viewer
 *
 * Os tiles devem estar na mesma pasta deste arquivo, organizados como:
 *   tiles/{z}/{x}/{y}.png   (ou .jpg, ajuste TILE_EXT abaixo)
 *
 * Ajuste as constantes de configuração conforme seu conjunto de tiles.
 */

// ─────────────────────────────────────────────
//  CONFIGURAÇÃO — edite aqui
// ─────────────────────────────────────────────

const CONFIG = {
  // Caminho relativo dos tiles a partir de index.html
  // Aceita os tokens OpenLayers: {z} {x} {y} (e {-y} para TMS invertido)
  tileUrl: './tiles/{z}/{x}/{y}.png',

  // Extensão dos tiles: 'png' | 'jpg' | 'webp'
  tileExt: 'png',

  // Nível de zoom inicial
  zoom: 13,

  // Centro inicial [longitude, latitude] em WGS-84
  center: [-41.93, -22.52],   // Rio de Janeiro como padrão

  // Limites de zoom suportados pelo seu conjunto de tiles
  minZoom: 12,
  maxZoom: 14,

  // Projeção do mapa ('EPSG:3857' = Web Mercator, padrão XYZ)
  projection: 'EPSG:31984',

  // Se seus tiles usam esquema TMS (eixo Y invertido), troque por '{-y}'
  // e altere tileUrl para './tiles/{z}/{x}/{-y}.png'
  invertY: false,
};

// ─────────────────────────────────────────────
//  INICIALIZAÇÃO DO MAPA
// ─────────────────────────────────────────────

// Camada de tiles locais (XYZ)
const xyzSource = new ol.source.XYZ({
  url: CONFIG.tileUrl,
  minZoom: CONFIG.minZoom,
  maxZoom: CONFIG.maxZoom,
  // Habilita requisições paralelas para melhor performance
  tileLoadFunction: localTileLoader,
  attributions: 'Tiles locais XYZ',
});

const tileLayer = new ol.layer.Tile({ source: xyzSource });

// View
const view = new ol.View({
  center: ol.proj.fromLonLat(CONFIG.center),
  zoom: CONFIG.zoom,
  minZoom: CONFIG.minZoom,
  maxZoom: CONFIG.maxZoom,
  projection: CONFIG.projection,
});

// Mapa
const map = new ol.Map({
  target: 'map',
  layers: [tileLayer],
  view: view,
  controls: ol.control.defaults.defaults({
    attribution: true,
    zoom: true,
    rotate: false,
  }).extend([
    new ol.control.ScaleLine({ units: 'metric' }),
  ]),
});

// ─────────────────────────────────────────────
//  CARREGADOR DE TILES LOCAL
//  Trata tiles ausentes sem exibir erro no console
// ─────────────────────────────────────────────

function localTileLoader(tile, src) {
  const img = tile.getImage();

  // Exibe indicador de carregamento
  showLoading(true);

  img.onload = () => {
    showLoading(false);
  };

  img.onerror = () => {
    // Tile não encontrado — substitui por pixel transparente
    img.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    showLoading(false);
  };

  img.src = src;
}

// ─────────────────────────────────────────────
//  HUD — coordenadas e zoom
// ─────────────────────────────────────────────

const coordsEl    = document.getElementById('coords');
const zoomEl      = document.getElementById('zoom-level');
const loadingEl   = document.getElementById('loading');

let loadingCount = 0;
function showLoading(on) {
  loadingCount = Math.max(0, loadingCount + (on ? 1 : -1));
  loadingEl.classList.toggle('visible', loadingCount > 0);
}

// Zoom atual
function updateZoom() {
  const z = view.getZoom();
  zoomEl.textContent = z != null ? z.toFixed(2) : '—';
}

view.on('change:resolution', updateZoom);
updateZoom();

// Coordenadas do cursor
map.on('pointermove', (evt) => {
  const lonLat = ol.proj.toLonLat(evt.coordinate, CONFIG.projection);
  const lon = lonLat[0].toFixed(6);
  const lat = lonLat[1].toFixed(6);
  coordsEl.textContent = `${lat >= 0 ? '+' : ''}${lat}°  ${lon >= 0 ? '+' : ''}${lon}°`;
});

map.on('pointerleave', () => {
  coordsEl.textContent = '—';
});

// ─────────────────────────────────────────────
//  UTILITÁRIOS OPCIONAIS
//  Descomente conforme necessidade
// ─────────────────────────────────────────────

/**
 * Enquadra o mapa na extensão total dos tiles.
 * Defina [minLon, minLat, maxLon, maxLat] em WGS-84.
 *
 * Exemplo:
 *   fitToBounds([-73.99, -33.75, -34.79, 5.27]); // Brasil
 */
function fitToBounds(extent4326) {
  const extent3857 = ol.proj.transformExtent(
    extent4326,
    'EPSG:4326',
    'EPSG:3857'
  );
  map.getView().fit(extent3857, {
    padding: [40, 40, 40, 40],
    duration: 600,
  });
}

// Expõe utilitários no escopo global para uso no console
window.mapViewer = { map, view, xyzSource, fitToBounds };
