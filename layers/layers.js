var wms_layers = [];

var format_PJDbatas_das_klhk_0 = new ol.format.GeoJSON();
var features_PJDbatas_das_klhk_0 = format_PJDbatas_das_klhk_0.readFeatures(json_PJDbatas_das_klhk_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PJDbatas_das_klhk_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PJDbatas_das_klhk_0.addFeatures(features_PJDbatas_das_klhk_0);
var lyr_PJDbatas_das_klhk_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PJDbatas_das_klhk_0, 
                style: style_PJDbatas_das_klhk_0,
                interactive: true,
                title: '<img src="styles/legend/PJDbatas_das_klhk_0.png" /> PJD — batas_das_klhk'
            });

lyr_PJDbatas_das_klhk_0.setVisible(true);
var layersList = [lyr_PJDbatas_das_klhk_0];
lyr_PJDbatas_das_klhk_0.set('fieldAliases', {'fid': 'fid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'kode_prov': 'kode_prov', 'nama_das': 'nama_das', 'luas_ha': 'luas_ha', 'kel_m': 'kel_m', 'prioritas_': 'prioritas_', 'kd_tematik': 'kd_tematik', 'kd_region': 'kd_region', 'kd_lintas': 'kd_lintas', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', 'kd_urutdas': 'kd_urutdas', 'globalid': 'globalid', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'st_area(sh': 'st_area(sh', 'st_length(': 'st_length(', });
lyr_PJDbatas_das_klhk_0.set('fieldImages', {'fid': '', 'objectid_1': '', 'objectid': '', 'kode_prov': '', 'nama_das': '', 'luas_ha': '', 'kel_m': '', 'prioritas_': '', 'kd_tematik': '', 'kd_region': '', 'kd_lintas': '', 'kd_das': '', 'wil_kerja': '', 'kd_urutdas': '', 'globalid': '', 'st_area_sh': '', 'st_length_': '', 'st_area(sh': '', 'st_length(': '', });
lyr_PJDbatas_das_klhk_0.set('fieldLabels', {'fid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'kode_prov': 'no label', 'nama_das': 'no label', 'luas_ha': 'no label', 'kel_m': 'no label', 'prioritas_': 'no label', 'kd_tematik': 'no label', 'kd_region': 'no label', 'kd_lintas': 'no label', 'kd_das': 'no label', 'wil_kerja': 'no label', 'kd_urutdas': 'no label', 'globalid': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'st_area(sh': 'no label', 'st_length(': 'no label', });
lyr_PJDbatas_das_klhk_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});