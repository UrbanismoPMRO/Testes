var size = 0;
var placement = 'point';
function categories_ZoneamentoEIXOS_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'EZCS-1':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(194,108,16,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZCS-2':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,167,18,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZCS-3':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(249,221,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZCS-4':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,103,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZUM-1':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(187,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZUM-2':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,92,92,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZUM-3':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(184,95,132,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZUM-4':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,133,183,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZUM-PL':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZIT-5':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(45,92,92,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'EZIT-6':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,217,170,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZCS-1':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(194,108,16,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZCS-2':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,167,18,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZCS-3':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(249,221,0,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZCS-4':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,103,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZUM-1':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(187,0,0,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZUM-2':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,92,92,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZUM-3':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(184,95,132,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZUM-4':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,133,183,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZUM-PL':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,127,0,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZIT-5':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(45,92,92,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PZIT-6':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,217,170,1.0)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(224,255,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7.068}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_ZoneamentoEIXOS_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Chave");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_ZoneamentoEIXOS_5(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
