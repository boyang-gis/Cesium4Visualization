/**
 * Emergency Geographic Information System 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
    name: "Emergency Geographic Information System"
};

var exampleConfig = {
    "Primer": {
        name: "Introduction",
        content: {
        }
    },
    "Widgets": {
        name: "Map World",
        content: {
            "Widgets": {
                name: "Example",
                content: [{
                    name: "Map World",
                    thumbnail: "10_geocoder.jpg",
                    fileName: "10_geocoder"
                }]
            }
        }
    },
    "Visualization": {
        name: "Visualization",
        content: {
            "Planet": {
                name: "HeatMap",
                content: [{
                    name: "Data Points",
                    thumbnail: "20_aqi.jpg",
                    fileName: "20_aqi"
                }]
            },
            "MapV": {
                name: "Location",
                content: [{
                    name: "Message Points",
                    thumbnail: "21_weibo.gif",
                    fileName: "21_weibo"
                }]
            }
        }
    },
};
/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "Primer": "fa-globe",
    "Widgets": "fa-desktop",
    "Visualization": "fa-pie-chart",
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "Primer": "fa-globe",
    "Widgets": "fa-desktop",
    "Visualization": "fa-pie-chart",
};