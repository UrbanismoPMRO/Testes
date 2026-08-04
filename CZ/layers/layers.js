ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([197539.115271, 7505024.411841, 199075.143987, 7506320.385383]);
var wms_layers = [];


        var lyr_Satlite_0 = new ol.layer.Tile({
            'title': 'Satélite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Virioeixos_1 = new ol.format.GeoJSON();
var features_Virioeixos_1 = format_Virioeixos_1.readFeatures(json_Virioeixos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Virioeixos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Virioeixos_1.addFeatures(features_Virioeixos_1);
var lyr_Virioeixos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Virioeixos_1, 
                style: style_Virioeixos_1,
                popuplayertitle: 'Viário (eixos)',
                interactive: false,
                title: '<img src="styles/legend/Virioeixos_1.png" /> Viário (eixos)'
            });
var format_PermetroUrbano_2 = new ol.format.GeoJSON();
var features_PermetroUrbano_2 = format_PermetroUrbano_2.readFeatures(json_PermetroUrbano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PermetroUrbano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermetroUrbano_2.addFeatures(features_PermetroUrbano_2);
var lyr_PermetroUrbano_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermetroUrbano_2, 
                style: style_PermetroUrbano_2,
                popuplayertitle: 'Perímetro Urbano ',
                interactive: true,
                title: '<img src="styles/legend/PermetroUrbano_2.png" /> Perímetro Urbano '
            });
var format_LimiteMunicipal_3 = new ol.format.GeoJSON();
var features_LimiteMunicipal_3 = format_LimiteMunicipal_3.readFeatures(json_LimiteMunicipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LimiteMunicipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_3.addFeatures(features_LimiteMunicipal_3);
var lyr_LimiteMunicipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_3, 
                style: style_LimiteMunicipal_3,
                popuplayertitle: 'Limite Municipal',
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipal_3.png" /> Limite Municipal'
            });
var format_ZoneamentoPOLGONOS_4 = new ol.format.GeoJSON();
var features_ZoneamentoPOLGONOS_4 = format_ZoneamentoPOLGONOS_4.readFeatures(json_ZoneamentoPOLGONOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZoneamentoPOLGONOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoPOLGONOS_4.addFeatures(features_ZoneamentoPOLGONOS_4);
var lyr_ZoneamentoPOLGONOS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoPOLGONOS_4, 
                style: style_ZoneamentoPOLGONOS_4,
                popuplayertitle: 'Zoneamento POLÍGONOS',
                interactive: true,
    title: 'Zoneamento POLÍGONOS<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_0.png" /> <br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_1.png" /> Zona Residencial 1<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_2.png" /> Zona Residencial 2<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_3.png" /> Zona Residencial 3<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_4.png" /> Zona Residencial 4<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_5.png" /> Zona Residencial 5<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_6.png" /> Zona Residencial 6<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_7.png" /> Zona Residencial 7<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_8.png" /> Zona Residencial 8<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_9.png" /> Zona Residencial 9<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_10.png" /> Zona Residencial 10<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_11.png" /> Zona Residencial 11<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_12.png" /> Zona Residencial 12<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_13.png" /> Zona Residencial 13<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_14.png" /> Zona Residencial 14<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_15.png" /> Zona Residencial 15<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_16.png" /> Zona Central 1<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_17.png" /> Zona Central 2<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_18.png" /> Zona Industrial<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_19.png" /> Zona de Indústria e Comércio<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_20.png" /> Zona de Interesse Turístico 1<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_21.png" /> Zona de Interesse Turístico 2<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_22.png" /> Zona de Interesse Turístico 3<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_23.png" /> Zona de Interesse Turístico 4<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_24.png" /> Zona de Uso Misto Panorâmica<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_25.png" /> Zona Unidade de Conservação 1<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_26.png" /> Zona Unidade de Conservação 2<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_27.png" /> Zona Unidade de Conservação 3<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_28.png" /> Zona Unidade de Conservação 4<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_29.png" /> Zona Unidade de Conservação 5<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_30.png" /> Zona de Especial Interesse do Meio Ambiente<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_31.png" /> Zona de Expansão Urbana Estruturante<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_32.png" /> Zona de Expansão Urbana Controlada 2<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_33.png" /> Zona de Expansão Urbana Controlada 1<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_34.png" /> Zona de Expansão Urbana<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_35.png" /> Zona Urbano-Rural<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_36.png" /> Zona de Amortecimento<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_37.png" /> Zona de Expansão Urbana Restrita<br />\
    <img src="styles/legend/ZoneamentoPOLGONOS_4_38.png" /> Zona Rural<br />' });
var format_ZoneamentoEIXOS_5 = new ol.format.GeoJSON();
var features_ZoneamentoEIXOS_5 = format_ZoneamentoEIXOS_5.readFeatures(json_ZoneamentoEIXOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_ZoneamentoEIXOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoEIXOS_5.addFeatures(features_ZoneamentoEIXOS_5);
var lyr_ZoneamentoEIXOS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoEIXOS_5, 
                style: style_ZoneamentoEIXOS_5,
                popuplayertitle: 'Zoneamento EIXOS',
                interactive: true,
    title: 'Zoneamento EIXOS<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_0.png" /> Zona de Comércio e Serviços 1<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_1.png" /> Zona de Comércio e Serviços 2<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_2.png" /> Zona de Comércio e Serviços 3<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_3.png" /> Zona de Comércio e Serviços 4<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_4.png" /> Zona de Uso Misto 1<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_5.png" /> Zona de Uso Misto 2<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_6.png" /> Zona de Uso Misto 3<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_7.png" /> Zona de Uso Misto 4<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_8.png" /> Zona de Uso Misto Parque Linear<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_9.png" /> Zona de Interesse Turístico 5<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_10.png" /> Zona de Interesse Turístico 6<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_11.png" /> Zona de Comércio e Serviços 1<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_12.png" /> Zona de Comércio e Serviços 2<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_13.png" /> Zona de Comércio e Serviços 3<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_14.png" /> Zona de Comércio e Serviços 4<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_15.png" /> Zona de Uso Misto 1<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_16.png" /> Zona de Uso Misto 2<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_17.png" /> Zona de Uso Misto 3<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_18.png" /> Zona de Uso Misto 4<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_19.png" /> Zona de Uso Misto Parque Linear<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_20.png" /> Zona de Interesse Turístico 5<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_21.png" /> Zona de Interesse Turístico 6<br />\
    <img src="styles/legend/ZoneamentoEIXOS_5_22.png" /> <br />' });
var format_Parcelas_6 = new ol.format.GeoJSON();
var features_Parcelas_6 = format_Parcelas_6.readFeatures(json_Parcelas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Parcelas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_6.addFeatures(features_Parcelas_6);
var lyr_Parcelas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas_6, 
                style: style_Parcelas_6,
                popuplayertitle: 'Parcelas',
                interactive: true,
                title: '<img src="styles/legend/Parcelas_6.png" /> Parcelas'
            });
var group_Fundirio = new ol.layer.Group({
                                layers: [lyr_Parcelas_6,],
                                fold: 'open',
                                title: 'Fundiário'});
var group_ZONEAMENTOREVISO = new ol.layer.Group({
                                layers: [lyr_ZoneamentoPOLGONOS_4,lyr_ZoneamentoEIXOS_5,],
                                fold: 'open',
                                title: 'ZONEAMENTO REVISÃO'});
var group_UrbanismoBase = new ol.layer.Group({
                                layers: [lyr_Virioeixos_1,lyr_PermetroUrbano_2,lyr_LimiteMunicipal_3,],
                                fold: 'close',
                                title: 'Urbanismo - Base'});

lyr_Satlite_0.setVisible(true);lyr_Virioeixos_1.setVisible(true);lyr_PermetroUrbano_2.setVisible(true);lyr_LimiteMunicipal_3.setVisible(true);lyr_ZoneamentoPOLGONOS_4.setVisible(true);lyr_ZoneamentoEIXOS_5.setVisible(true);lyr_Parcelas_6.setVisible(true);
var layersList = [lyr_Satlite_0,group_UrbanismoBase,group_ZONEAMENTOREVISO,group_Fundirio];
lyr_Virioeixos_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'tunnel': 'tunnel', 'bridge': 'bridge', 'level': 'level', 'fid_2': 'fid_2', 'OBJECTID_1': 'OBJECTID_1', 'MUNICN': 'MUNICN', 'REGGOV': 'REGGOV', 'cd7': 'cd7', 'cd6': 'cd6', 'AREA_KM2': 'AREA_KM2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PermetroUrbano_2.set('fieldAliases', {'fid': 'fid', });
lyr_LimiteMunicipal_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'MUNICN': 'MUNICN', 'REGGOV': 'REGGOV', 'cd7': 'cd7', 'cd6': 'cd6', 'AREA_KM2': 'AREA_KM2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZoneamentoPOLGONOS_4.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'Nome': 'Nome', 'HTML': 'HTML', 'OBS': 'OBS', 'Status': 'Status', 'Status_Data': 'Data da alteração', 'Status_Resp': 'Respons. alteração', 'Revisao': 'Revisão', 'parametros': 'Parâmetros', });
lyr_ZoneamentoEIXOS_5.set('fieldAliases', {'fid': 'fid', 'Zona': 'Zona', 'OBS': 'OBS', 'Revisao_Data': 'Data da Revisão', 'Revisao_Resp': 'Responsável Revisão', 'T_Eixo': 'Tipo Eixo', 'parametros': 'Parâmetros', 'Viario': 'Hierarquia Viária', 'temp': 'temp', 'Titulo': 'Titulo', 'Chave': 'Chave', 'Mapa_Base': 'Mapa_Base', 'Rotulo': 'Rotulo', });
lyr_Parcelas_6.set('fieldAliases', {'fid': 'fid', 'CodParcela': 'Cód. Parcela', 'Parcela': 'Parcela', 'TipoParcela': 'Tipo de Parcela', 'CodQuadra': 'Cód. Quadra', 'CodPAL': 'Cód. PAL', 'Matricula': 'Matrícula', 'CodProprietario': 'Cód. Proprietário', 'AreaPAL': 'Área da Parcela', 'Logradouro': 'Logradouro', 'LogradouroPAL': 'Logradouro (PAL)', 'Testada': 'Testada', 'Autenticidade': 'Autenticidade', 'DocAutenticador': 'Documento Autenticador', 'Certificação': 'Certificação', });
lyr_Virioeixos_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'surface': '', 'ref': '', 'tunnel': '', 'bridge': '', 'level': '', 'fid_2': '', 'OBJECTID_1': '', 'MUNICN': '', 'REGGOV': '', 'cd7': '', 'cd6': '', 'AREA_KM2': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_PermetroUrbano_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_LimiteMunicipal_3.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'MUNICN': '', 'REGGOV': '', 'cd7': '', 'cd6': '', 'AREA_KM2': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_ZoneamentoPOLGONOS_4.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'Nome': 'TextEdit', 'HTML': 'TextEdit', 'OBS': 'TextEdit', 'Status': 'Range', 'Status_Data': 'DateTime', 'Status_Resp': 'TextEdit', 'Revisao': 'TextEdit', 'parametros': 'TextEdit', });
lyr_ZoneamentoEIXOS_5.set('fieldImages', {'fid': 'TextEdit', 'Zona': 'TextEdit', 'OBS': 'TextEdit', 'Revisao_Data': 'DateTime', 'Revisao_Resp': 'TextEdit', 'T_Eixo': 'TextEdit', 'parametros': 'TextEdit', 'Viario': 'TextEdit', 'temp': 'TextEdit', 'Titulo': 'TextEdit', 'Chave': 'TextEdit', 'Mapa_Base': 'CheckBox', 'Rotulo': 'CheckBox', });
lyr_Parcelas_6.set('fieldImages', {'fid': '', 'CodParcela': '', 'Parcela': '', 'TipoParcela': '', 'CodQuadra': '', 'CodPAL': '', 'Matricula': '', 'CodProprietario': '', 'AreaPAL': '', 'Logradouro': '', 'LogradouroPAL': '', 'Testada': '', 'Autenticidade': '', 'DocAutenticador': '', 'Certificação': '', });
lyr_Virioeixos_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'ref': 'no label', 'tunnel': 'no label', 'bridge': 'no label', 'level': 'no label', 'fid_2': 'no label', 'OBJECTID_1': 'no label', 'MUNICN': 'no label', 'REGGOV': 'no label', 'cd7': 'no label', 'cd6': 'no label', 'AREA_KM2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PermetroUrbano_2.set('fieldLabels', {'fid': 'no label', });
lyr_LimiteMunicipal_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'MUNICN': 'no label', 'REGGOV': 'no label', 'cd7': 'no label', 'cd6': 'no label', 'AREA_KM2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ZoneamentoPOLGONOS_4.set('fieldLabels', {'fid': 'no label', 'Zona': 'no label', 'Nome': 'no label', 'HTML': 'no label', 'OBS': 'no label', 'Status': 'no label', 'Status_Data': 'no label', 'Status_Resp': 'no label', 'Revisao': 'no label', 'parametros': 'no label', });
lyr_ZoneamentoEIXOS_5.set('fieldLabels', {'fid': 'no label', 'Zona': 'no label', 'OBS': 'no label', 'Revisao_Data': 'no label', 'Revisao_Resp': 'no label', 'T_Eixo': 'no label', 'parametros': 'no label', 'Viario': 'no label', 'temp': 'no label', 'Titulo': 'no label', 'Chave': 'no label', 'Mapa_Base': 'no label', 'Rotulo': 'no label', });
lyr_Parcelas_6.set('fieldLabels', {'fid': 'no label', 'CodParcela': 'no label', 'Parcela': 'no label', 'TipoParcela': 'no label', 'CodQuadra': 'no label', 'CodPAL': 'no label', 'Matricula': 'no label', 'CodProprietario': 'no label', 'AreaPAL': 'no label', 'Logradouro': 'no label', 'LogradouroPAL': 'no label', 'Testada': 'no label', 'Autenticidade': 'no label', 'DocAutenticador': 'no label', 'Certificação': 'no label', });
lyr_Parcelas_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});