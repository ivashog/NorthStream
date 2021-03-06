var highlightLayer;

function highlightFeature(e) {
    highlightLayer = e.target;
    console.log(e.target.feature.geometry.type);
    if (e.target.feature.geometry.type === 'LineString') {
        highlightLayer.setStyle({
            weight: 10
        });
    } else {
        highlightLayer.setStyle({
            weight: 15
        });
    }
}
var map = L.map('map', {
    zoomControl: true,
    maxZoom: 8,
    minZoom: 4
}).fitBounds([
    [27.8430566871, -31.3129890125],
    [63.2200305485, 58.588767342]
]);
var hash = new L.Hash(map);
map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
var bounds_group = new L.featureGroup([]);
var basemap0 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 8
});
basemap0.addTo(map);

function setBounds() {
    map.setMaxBounds(map.getBounds());
}

function pop_Pipeline_Projects_0(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Name</th>\
                        <td>' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Description</th>\
                        <td>' + (feature.properties['Descriptio'] !== null ? Autolinker.link(String(feature.properties['Descriptio'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Value</th>\
                        <td>' + (feature.properties['Value'] !== null ? Autolinker.link(String(feature.properties['Value'])) : '') + '</td>\
                    </tr>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function stylePipelineProjects(features) {
    var att = features.properties;
    var featureStyle = {
        pane: 'pane_Pipeline_Projects_0',
        opacity: 1,
        dashArray: '10,7',
        lineCap: 'butt',
        lineJoin: 'round',
        fillOpacity: 0
    };
    switch (att.Name) {
        case 'Nord Stream 2':
            featureStyle.color = '#b17164';
            featureStyle.weight = 7.0;
            return featureStyle;
            break;
        case 'EUGAL':
            featureStyle.color = '#b17164';
            featureStyle.weight = 7.0;
            return featureStyle;
            break;
        case 'TurkStream':
            featureStyle.color = '#b17164';
            featureStyle.weight = 6.0;
            return featureStyle;
            break;
        case 'South Caucasus Pipeline':
            featureStyle.color = '#378bd4';
            featureStyle.weight = 4.5;
            return featureStyle;
            break;
        case 'Trans-Anatolian Pipeline':
            featureStyle.color = '#378bd4';
            featureStyle.weight = 3.0;
            return featureStyle;
            break;
        case 'Trans Adriatic Pipeline':
            featureStyle.color = '#56ada0';
            featureStyle.weight = 2.5;
            return featureStyle;
            break;
        case 'Baltic Pipeline':
            featureStyle.color = '#56ada0';
            featureStyle.weight = 2.5;
            return featureStyle;
            break;
        case 'Eastring':
            featureStyle.color = '#56ada0';
            featureStyle.weight = 3.5;
            return featureStyle;
            break;
        case 'Eastring (Alternative)':
            featureStyle.color = '#56ada0';
            featureStyle.weight = 3.5;
            return featureStyle;
            break;

    }
}
map.createPane('pane_Pipeline_Projects_0');
map.getPane('pane_Pipeline_Projects_0').style.zIndex = 400;
map.getPane('pane_Pipeline_Projects_0').style['mix-blend-mode'] = 'normal';
var layer_Pipeline_Projects_0 = new L.geoJson(json_Pipeline_Projects_0, {
    attribution: '<a href=""></a>',
    pane: 'pane_Pipeline_Projects_0',
    onEachFeature: pop_Pipeline_Projects_0,
    style: stylePipelineProjects,
});
bounds_group.addLayer(layer_Pipeline_Projects_0);
map.addLayer(layer_Pipeline_Projects_0);

function pop_Pipeline_supply_directions_1(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Direction</th>\
                        <td>' + (feature.properties['Direction'] !== null ? Autolinker.link(String(feature.properties['Direction'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Value</th>\
                        <td>' + (feature.properties['Value'] !== null ? Autolinker.link(String(feature.properties['Value'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Class</th>\
                        <td>' + (feature.properties['Class'] !== null ? Autolinker.link(String(feature.properties['Class'])) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, {
        maxHeight: 400
    });
}

function getWeight(d) {
    return d > 84 ? 10 :
        d > 72 ? 9 :
        d > 60 ? 8 :
        d > 48 ? 7 :
        d > 36 ? 6 :
        d > 22 ? 5 :
        d > 12 ? 3 :
        d > 6 ? 2 :
        d > 3 ? 1.5 :
        d > 3 ? 1.5 :
        1.0;
}

function style_Pipeline_supply_directions_1_0(feature) {
    var attr = feature.properties;
    var featureStyle = {
        pane: 'pane_Pipeline_supply_directions_1',
        opacity: 1,
        color: 'rgba(70,140,170,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'bevel',
        weight: getWeight(attr.Value),
        fillOpacity: 0
    };
    switch (attr.Class) {
        case 'yes':
            featureStyle.color = '#b17164';
            return featureStyle;
            break;
        case 'no':
            featureStyle.color = '#56ada0';
            return featureStyle;
            break;
        case 'rev':
            featureStyle.color = '#8968e3';
            return featureStyle;
            break;
        case 'thr':
            featureStyle.color = '#378bd4';
            return featureStyle;
            break;
    }
}
    map.createPane('pane_Pipeline_supply_directions_1');
    map.getPane('pane_Pipeline_supply_directions_1').style.zIndex = 401;
    map.getPane('pane_Pipeline_supply_directions_1').style['mix-blend-mode'] = 'normal';
    var layer_Pipeline_supply_directions_1 = new L.geoJson(json_Pipeline_supply_directions_1, {
        attribution: '<a href=""></a>',
        pane: 'pane_Pipeline_supply_directions_1',
        onEachFeature: pop_Pipeline_supply_directions_1,
        style: style_Pipeline_supply_directions_1_0,
    });
    bounds_group.addLayer(layer_Pipeline_supply_directions_1);
    map.addLayer(layer_Pipeline_supply_directions_1);

    function pop_LNG_supply_directions_2(feature, layer) {
        layer.on({
            mouseout: function (e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Country</th>\
                        <td>' + (feature.properties['Country'] !== null ? Autolinker.link(String(feature.properties['Country'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Value</th>\
                        <td>' + (feature.properties['Value'] !== null ? Autolinker.link(String(feature.properties['Value'])) : '') + '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, {
            maxHeight: 400
        });
    }

    function style_LNG_supply_directions_2_0(feature) {
        if (feature.properties['Value'] >= 0.000000 && feature.properties['Value'] <= 1.000000) {
            return {
                pane: 'pane_LNG_supply_directions_2',
                opacity: 1,
                color: 'rgba(53,147,210,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'bevel',
                weight: 1,
                fillOpacity: 0,
            }
        }
        if (feature.properties['Value'] >= 1.000000 && feature.properties['Value'] <= 2.000000) {
            return {
                pane: 'pane_LNG_supply_directions_2',
                opacity: 1,
                color: 'rgba(53,147,210,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
            }
        }
        if (feature.properties['Value'] >= 2.000000 && feature.properties['Value'] <= 3.000000) {
            return {
                pane: 'pane_LNG_supply_directions_2',
                opacity: 1,
                color: 'rgba(53,147,210,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
            }
        }
        if (feature.properties['Value'] >= 3.000000 && feature.properties['Value'] <= 4.000000) {
            return {
                pane: 'pane_LNG_supply_directions_2',
                opacity: 1,
                color: 'rgba(53,147,210,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
            }
        }
        if (feature.properties['Value'] >= 4.000000 && feature.properties['Value'] <= 5.000000) {
            return {
                pane: 'pane_LNG_supply_directions_2',
                opacity: 1,
                color: 'rgba(53,147,210,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
            }
        }
        if (feature.properties['Value'] >= 5.000000 && feature.properties['Value'] <= 6.000000) {
            return {
                pane: 'pane_LNG_supply_directions_2',
                opacity: 1,
                color: 'rgba(53,147,210,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
            }
        }
        if (feature.properties['Value'] >= 6.000000 && feature.properties['Value'] <= 7.000000) {
            return {
                pane: 'pane_LNG_supply_directions_2',
                opacity: 1,
                color: 'rgba(53,147,210,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'bevel',
                weight: 1.0,
                fillOpacity: 0,
            }
        }
    }
    map.createPane('pane_LNG_supply_directions_2');
    map.getPane('pane_LNG_supply_directions_2').style.zIndex = 402;
    map.getPane('pane_LNG_supply_directions_2').style['mix-blend-mode'] = 'normal';
    var layer_LNG_supply_directions_2 = new L.geoJson(json_LNG_supply_directions_2, {
        attribution: '<a href=""></a>',
        pane: 'pane_LNG_supply_directions_2',
        onEachFeature: pop_LNG_supply_directions_2,
        style: style_LNG_supply_directions_2_0,
    });
    bounds_group.addLayer(layer_LNG_supply_directions_2);
    map.addLayer(layer_LNG_supply_directions_2);

    function pop_Production_3(feature, layer) {
        layer.on({
            mouseout: function (e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Country</th>\
                        <td>' + (feature.properties['Country'] !== null ? Autolinker.link(String(feature.properties['Country'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Value</th>\
                        <td>' + (feature.properties['Value'] !== null ? Autolinker.link(String(feature.properties['Value'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Latitude</th>\
                        <td>' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Longitude</th>\
                        <td>' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, {
            maxHeight: 400
        });
    }

    function style_Production_3_0(feature) {
        if (feature.properties['Value'] >= 0.000000 && feature.properties['Value'] <= 5.000000) {
            return {
                pane: 'pane_Production_3',
                radius: 6.0,
                opacity: 1,
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(86,173,160,1.0)',
            }
        }
        if (feature.properties['Value'] >= 5.000000 && feature.properties['Value'] <= 10.000000) {
            return {
                pane: 'pane_Production_3',
                radius: 9.0,
                opacity: 1,
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(86,173,160,1.0)',
            }
        }
        if (feature.properties['Value'] >= 10.000000 && feature.properties['Value'] <= 20.000000) {
            return {
                pane: 'pane_Production_3',
                radius: 12.0,
                opacity: 1,
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(86,173,160,1.0)',
            }
        }
        if (feature.properties['Value'] >= 20.000000 && feature.properties['Value'] <= 40.000000) {
            return {
                pane: 'pane_Production_3',
                radius: 15.0,
                opacity: 1,
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(86,173,160,1.0)',
            }
        }
        if (feature.properties['Value'] >= 40.000000 && feature.properties['Value'] <= 60.000000) {
            return {
                pane: 'pane_Production_3',
                radius: 18.0,
                opacity: 1,
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(86,173,160,1.0)',
            }
        }
    }
    map.createPane('pane_Production_3');
    map.getPane('pane_Production_3').style.zIndex = 403;
    map.getPane('pane_Production_3').style['mix-blend-mode'] = 'normal';
    var layer_Production_3 = new L.geoJson(json_Production_3, {
        attribution: '<a href=""></a>',
        pane: 'pane_Production_3',
        onEachFeature: pop_Production_3,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_Production_3_0(feature));
        },
    });
    bounds_group.addLayer(layer_Production_3);
    map.addLayer(layer_Production_3);

    function pop_Borderspoints_additional_4(feature, layer) {
        layer.on({
            mouseout: function (e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Directions</th>\
                        <td>' + (feature.properties['Directions'] !== null ? Autolinker.link(String(feature.properties['Directions'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Descriptio</th>\
                        <td>' + (feature.properties['Descriptio'] !== null ? Autolinker.link(String(feature.properties['Descriptio'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Value</th>\
                        <td>' + (feature.properties['Value'] !== null ? Autolinker.link(String(feature.properties['Value'])) : '') + '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, {
            maxHeight: 400
        });
    }

    function style_Borderspoints_additional_4_0(feature) {
        if (feature.properties['Value'] >= 41.300000 && feature.properties['Value'] <= 65.250000) {
            return {
                pane: 'pane_Borderspoints_additional_4',
                radius: 9.0,
                opacity: 1,
                color: 'rgba(128,29,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,113,100,1.0)',
            }
        }
        if (feature.properties['Value'] >= 65.250000 && feature.properties['Value'] <= 89.200000) {
            return {
                pane: 'pane_Borderspoints_additional_4',
                radius: 14.0,
                opacity: 1,
                color: 'rgba(128,29,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,113,100,1.0)',
            }
        }
    }
    map.createPane('pane_Borderspoints_additional_4');
    map.getPane('pane_Borderspoints_additional_4').style.zIndex = 404;
    map.getPane('pane_Borderspoints_additional_4').style['mix-blend-mode'] = 'normal';
    var layer_Borderspoints_additional_4 = new L.geoJson(json_Borderspoints_additional_4, {
        attribution: '<a href=""></a>',
        pane: 'pane_Borderspoints_additional_4',
        onEachFeature: pop_Borderspoints_additional_4,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_Borderspoints_additional_4_0(feature));
        },
    });
    bounds_group.addLayer(layer_Borderspoints_additional_4);
    map.addLayer(layer_Borderspoints_additional_4);

    function pop_Borderpoints_5(feature, layer) {
        layer.on({
            mouseout: function (e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Borderpoin</th>\
                        <td>' + (feature.properties['Borderpoin'] !== null ? Autolinker.link(String(feature.properties['Borderpoin'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Latitude</th>\
                        <td>' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Longitude</th>\
                        <td>' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">From</th>\
                        <td>' + (feature.properties['From'] !== null ? Autolinker.link(String(feature.properties['From'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">To</th>\
                        <td>' + (feature.properties['To'] !== null ? Autolinker.link(String(feature.properties['To'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2010</th>\
                        <td>' + (feature.properties['2010'] !== null ? Autolinker.link(String(feature.properties['2010'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2011</th>\
                        <td>' + (feature.properties['2011'] !== null ? Autolinker.link(String(feature.properties['2011'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2012</th>\
                        <td>' + (feature.properties['2012'] !== null ? Autolinker.link(String(feature.properties['2012'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2013</th>\
                        <td>' + (feature.properties['2013'] !== null ? Autolinker.link(String(feature.properties['2013'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2014</th>\
                        <td>' + (feature.properties['2014'] !== null ? Autolinker.link(String(feature.properties['2014'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2015</th>\
                        <td>' + (feature.properties['2015'] !== null ? Autolinker.link(String(feature.properties['2015'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2016</th>\
                        <td>' + (feature.properties['2016'] !== null ? Autolinker.link(String(feature.properties['2016'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">2017</th>\
                        <td>' + (feature.properties['2017'] !== null ? Autolinker.link(String(feature.properties['2017'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Class</th>\
                        <td>' + (feature.properties['Class'] !== null ? Autolinker.link(String(feature.properties['Class'])) : '') + '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, {
            maxHeight: 400
        });
    }

    function style_Borderpoints_5_0(feature) {
        if (feature.properties['2017'] >= 0.000000 && feature.properties['2017'] <= 500.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 2.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
        if (feature.properties['2017'] >= 500.000000 && feature.properties['2017'] <= 1500.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 3.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
        if (feature.properties['2017'] >= 1500.000000 && feature.properties['2017'] <= 3000.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 4.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
        if (feature.properties['2017'] >= 3000.000000 && feature.properties['2017'] <= 6000.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 5.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
        if (feature.properties['2017'] >= 6000.000000 && feature.properties['2017'] <= 12000.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 6.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
        if (feature.properties['2017'] >= 12000.000000 && feature.properties['2017'] <= 24000.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 7.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
        if (feature.properties['2017'] >= 24000.000000 && feature.properties['2017'] <= 36000.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 8.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
        if (feature.properties['2017'] >= 36000.000000 && feature.properties['2017'] <= 48000.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 9.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
        if (feature.properties['2017'] >= 48000.000000 && feature.properties['2017'] <= 60000.000000) {
            return {
                pane: 'pane_Borderpoints_5',
                radius: 10.0,
                opacity: 1,
                color: 'rgba(78,112,155,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(77,161,192,1.0)',
            }
        }
    }
    map.createPane('pane_Borderpoints_5');
    map.getPane('pane_Borderpoints_5').style.zIndex = 405;
    map.getPane('pane_Borderpoints_5').style['mix-blend-mode'] = 'normal';
    var layer_Borderpoints_5 = new L.geoJson(json_Borderpoints_5, {
        attribution: '<a href=""></a>',
        pane: 'pane_Borderpoints_5',
        onEachFeature: pop_Borderpoints_5,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_Borderpoints_5_0(feature));
        },
    });
    bounds_group.addLayer(layer_Borderpoints_5);
    map.addLayer(layer_Borderpoints_5);

    function pop_LNG_6(feature, layer) {
        layer.on({
            mouseout: function (e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Source'] !== null ? Autolinker.link(String(feature.properties['Source'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Value</th>\
                        <td>' + (feature.properties['Value'] !== null ? Autolinker.link(String(feature.properties['Value'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Name</th>\
                        <td>' + (feature.properties['Name'] !== null ? Autolinker.link(String(feature.properties['Name'])) : '') + '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, {
            maxHeight: 400
        });
    }

    function style_LNG_6_0(feature) {
        if (feature.properties['Value'] >= 60.500000 && feature.properties['Value'] <= 60.500000) {
            return {
                pane: 'pane_LNG_6',
                radius: 22.0,
                opacity: 1,
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(55,139,212,1.0)',
            }
        }
    }
    map.createPane('pane_LNG_6');
    map.getPane('pane_LNG_6').style.zIndex = 406;
    map.getPane('pane_LNG_6').style['mix-blend-mode'] = 'normal';
    var layer_LNG_6 = new L.geoJson(json_LNG_6, {
        attribution: '<a href=""></a>',
        pane: 'pane_LNG_6',
        onEachFeature: pop_LNG_6,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_LNG_6_0(feature));
        },
    });
    bounds_group.addLayer(layer_LNG_6);
    map.addLayer(layer_LNG_6);

    function pop_Export_7(feature, layer) {
        layer.on({
            mouseout: function (e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Country</th>\
                        <td>' + (feature.properties['Country'] !== null ? Autolinker.link(String(feature.properties['Country'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Latitude'] !== null ? Autolinker.link(String(feature.properties['Latitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['Longitude'] !== null ? Autolinker.link(String(feature.properties['Longitude'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">Value</th>\
                        <td>' + (feature.properties['Value'] !== null ? Autolinker.link(String(feature.properties['Value'])) : '') + '</td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, {
            maxHeight: 400
        });
    }

    /*function styleExport (feature) {
        var att = feature.properties;
        switch (att.country) {
            case 'Norway':
                return {
                pane: 'pane_Export_7',
                radius: 30.2222,
                opacity: 1,  
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillcolor: '#56ada0',
                }
                break;
            case 'Algeria':
                return {
                pane: 'pane_Export_7',
                radius: 15.77778,
                opacity: 1,  
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillcolor: '#378bd4',
                }
                break;
            case 'Iran':
                return {
                pane: 'pane_Export_7',
                radius: 10.0,
                opacity: 1,  
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillcolor: '#378bd4',
                }
                break;
            case 'Azerbaijan':
                return {
                pane: 'pane_Export_7',
                radius: 10.0,
                opacity: 1,  
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillcolor: '#378bd4',
                }
                break;
            case 'Libya':
                return {
                pane: 'pane_Export_7',
                radius: 10.0,
                opacity: 1,  
                color: '#111111',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillcolor: '#378bd4',
                }
                break;
                
            case 'Russia':
                return {
                pane: 'pane_Export_7',
                radius: 36.0,
                opacity: 1,  
                color: 'rgba(0,0,0,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 0,
                fillcolor: '#b17164',
                }
                break;        
    }
    }*/

    function style_Export_7_0(feature) {
        if (feature.properties['Value'] >= 0.000000 && feature.properties['Value'] <= 10.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 10.0,
                opacity: 1,
                color: '#378bd4',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: '#378bd4',
            }
        }
        if (feature.properties['Value'] >= 10.000000 && feature.properties['Value'] <= 20.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 12.88888,
                opacity: 1,
                color: 'rgba(177,113,100,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,113,100,1.0)',
            }
        }
        if (feature.properties['Value'] >= 20.000000 && feature.properties['Value'] <= 40.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 15.77778,
                opacity: 1,
                color: '#378bd4',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: '#378bd4',
            }
        }
        if (feature.properties['Value'] >= 40.000000 && feature.properties['Value'] <= 60.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 18.66666,
                opacity: 1,
                color: 'rgba(177,113,100,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,113,100,1.0)',
            }
        }
        if (feature.properties['Value'] >= 60.000000 && feature.properties['Value'] <= 80.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 21.5556,
                opacity: 1,
                color: 'rgba(177,113,100,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,113,100,1.0)',
            }
        }
        if (feature.properties['Value'] >= 80.000000 && feature.properties['Value'] <= 100.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 24.4444,
                opacity: 1,
                color: 'rgba(177,113,100,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,113,100,1.0)',
            }
        }
        if (feature.properties['Value'] >= 100.000000 && feature.properties['Value'] <= 120.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 27.3334,
                opacity: 1,
                color: 'rgba(177,113,100,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,113,100,1.0)',
            }
        }
        if (feature.properties['Value'] >= 120.000000 && feature.properties['Value'] <= 140.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 30.2222,
                opacity: 1,
                color: '#56ada0',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: '#56ada0',
            }
        }
        if (feature.properties['Value'] >= 140.000000 && feature.properties['Value'] <= 170.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 33.1112,
                opacity: 1,
                color: 'rgba(177,113,100,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,113,100,1.0)',
            }
        }
        if (feature.properties['Value'] >= 170.000000 && feature.properties['Value'] <= 200.000000) {
            return {
                pane: 'pane_Export_7',
                radius: 36.0,
                opacity: 1,
                color: '#b17164',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: '#b17164',
            }
        }
    }
    map.createPane('pane_Export_7');
    map.getPane('pane_Export_7').style.zIndex = 407;
    map.getPane('pane_Export_7').style['mix-blend-mode'] = 'normal';
    var layer_Export_7 = new L.geoJson(json_Export_7, {
        attribution: '<a href=""></a>',
        pane: 'pane_Export_7',
        onEachFeature: pop_Export_7,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_Export_7_0(feature));
        },
    });
    bounds_group.addLayer(layer_Export_7);
    map.addLayer(layer_Export_7);
    var baseMaps = {};
    L.control.layers(baseMaps, {
        'Export<br /><table><tr><td style="text-align: center;"><img src="legend/Export_7_001000.png" /></td><td> 0.0 - 10.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_1002001.png" /></td><td> 10.0 - 20.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_2004002.png" /></td><td> 20.0 - 40.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_4006003.png" /></td><td> 40.0 - 60.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_6008004.png" /></td><td> 60.0 - 80.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_80010005.png" /></td><td> 80.0 - 100.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_100012006.png" /></td><td> 100.0 - 120.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_120014007.png" /></td><td> 120.0 - 140.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_140017008.png" /></td><td> 140.0 - 170.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Export_7_170020009.png" /></td><td> 170.0 - 200.0 </td></tr></table>': layer_Export_7,
        'LNG<br /><table><tr><td style="text-align: center;"><img src="legend/LNG_6_6050.png" /></td><td>60.5</td></tr></table>': layer_LNG_6,
        'Borderpoints<br /><table><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_05000.png" /></td><td>0 - 500</td></tr><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_50015001.png" /></td><td>500 - 1500</td></tr><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_150030002.png" /></td><td>1500 - 3000</td></tr><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_300060003.png" /></td><td> 3000 - 6000 </td></tr><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_6000120004.png" /></td><td> 6000 - 12000 </td></tr><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_12000240005.png" /></td><td> 12000 - 24000 </td></tr><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_24000360006.png" /></td><td> 24000 - 36000 </td></tr><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_36000480007.png" /></td><td> 36000 - 48000 </td></tr><tr><td style="text-align: center;"><img src="legend/Borderpoints_5_48000600008.png" /></td><td> 48000 - 60000 </td></tr></table>': layer_Borderpoints_5,
        'Borderspoints_additional<br /><table><tr><td style="text-align: center;"><img src="legend/Borderspoints_additional_4_41650.png" /></td><td> 41 - 65 </td></tr><tr><td style="text-align: center;"><img src="legend/Borderspoints_additional_4_65891.png" /></td><td> 65 - 89 </td></tr></table>': layer_Borderspoints_additional_4,
        'Production<br /><table><tr><td style="text-align: center;"><img src="legend/Production_3_050.png" /></td><td>0-5</td></tr><tr><td style="text-align: center;"><img src="legend/Production_3_51101.png" /></td><td>5.1-10</td></tr><tr><td style="text-align: center;"><img src="legend/Production_3_101202.png" /></td><td>10.1-20</td></tr><tr><td style="text-align: center;"><img src="legend/Production_3_201403.png" /></td><td>20.1-40</td></tr><tr><td style="text-align: center;"><img src="legend/Production_3_401604.png" /></td><td>40.1-60</td></tr></table>': layer_Production_3,
        'LNG_supply_directions<br /><table><tr><td style="text-align: center;"><img src="legend/LNG_supply_directions_2_0001000.png" /></td><td> 0.00 - 1.00 </td></tr><tr><td style="text-align: center;"><img src="legend/LNG_supply_directions_2_1002001.png" /></td><td> 1.00 - 2.00 </td></tr><tr><td style="text-align: center;"><img src="legend/LNG_supply_directions_2_2003002.png" /></td><td> 2.00 - 3.00 </td></tr><tr><td style="text-align: center;"><img src="legend/LNG_supply_directions_2_3004003.png" /></td><td> 3.00 - 4.00 </td></tr><tr><td style="text-align: center;"><img src="legend/LNG_supply_directions_2_4005004.png" /></td><td> 4.00 - 5.00 </td></tr><tr><td style="text-align: center;"><img src="legend/LNG_supply_directions_2_5006005.png" /></td><td> 5.00 - 6.00 </td></tr><tr><td style="text-align: center;"><img src="legend/LNG_supply_directions_2_6007006.png" /></td><td> 6.00 - 7.00 </td></tr></table>': layer_LNG_supply_directions_2,
        'Pipeline_supply_directions<br /><table><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_00050.png" /></td><td> 0.0 - 0.5 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_05151.png" /></td><td> 0.5 - 1.5 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_15302.png" /></td><td> 1.5 - 3.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_30603.png" /></td><td> 3.0 - 6.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_601204.png" /></td><td> 6.0 - 12.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_1202205.png" /></td><td> 12.0 - 22.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_2203606.png" /></td><td> 22.0 - 36.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_3604807.png" /></td><td> 36.0 - 48.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_4806008.png" /></td><td> 48.0 - 60.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_6007209.png" /></td><td> 60.0 - 72.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_72084010.png" /></td><td> 72.0 - 84.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_supply_directions_1_84096011.png" /></td><td> 84.0 - 96.0 </td></tr></table>': layer_Pipeline_supply_directions_1,
        'Pipeline_Projects<br /><table><tr><td style="text-align: center;"><img src="legend/Pipeline_Projects_0_001100.png" /></td><td> 0.0 - 11.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_Projects_0_1102101.png" /></td><td> 11.0 - 21.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_Projects_0_2103102.png" /></td><td> 21.0 - 31.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_Projects_0_3104103.png" /></td><td> 31.0 - 41.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_Projects_0_4105104.png" /></td><td> 41.0 - 51.0 </td></tr><tr><td style="text-align: center;"><img src="legend/Pipeline_Projects_0_5106105.png" /></td><td> 51.0 - 61.0 </td></tr></table>': layer_Pipeline_Projects_0,
    }).addTo(map);
    setBounds();
    var i = 0;
    // layer labels
    /*layer_Pipeline_Projects_0.eachLayer(function(layer) {
        var context = {
            feature: layer.feature,
            variables: {}
        };
        layer.bindTooltip((layer.feature.properties['Name'] !== null?String('<div style="color: #468caa; font-size: 8pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['Name']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Pipeline_Projects_0'});
        labels.push(layer);
        totalMarkers += 1;
          layer.added = true;
          addLabel(layer, i);
          i++;
    });*/
    var i = 0;
    layer_Production_3.eachLayer(function (layer) {
        var context = {
            feature: layer.feature,
            variables: {}
        };
        layer.bindTooltip((label_Production_3_eval_expression(context) !== null ? String('<div style="color: #c0d1d1; font-size: 8pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + label_Production_3_eval_expression(context)) + '</div>' : ''), {
            permanent: true,
            offset: [-0, -16],
            className: 'css_Production_3'
        });
        labels.push(layer);
        totalMarkers += 1;
        layer.added = true;
        addLabel(layer, i);
        i++;
    });
    resetLabels([layer_Pipeline_Projects_0, layer_Production_3]);
    map.on("zoomend", function () {
        resetLabels([layer_Pipeline_Projects_0, layer_Production_3]);
    });
    map.on("layeradd", function () {
        resetLabels([layer_Pipeline_Projects_0, layer_Production_3]);
    });
    map.on("layerremove", function () {
        resetLabels([layer_Pipeline_Projects_0, layer_Production_3]);
    });