var container = document.getElementById("graphContainer");
container.style.background = 'url(./static/src/images/window.gif)';
var graph = new mxGraph(container);
var parent = graph.getDefaultParent();
// 画方块
graph.insertVertex(parent, null, 'Hello', 50, 50, 80, 30);
graph.insertVertex(parent, null, 'World', 200, 50, 80, 30);

function chooseNewDataFn(obj) {
    var chooseNewDataObj = document.getElementById("chooseNewData");
    console.log(chooseNewDataObj);
    if (obj.checked == false) {
        chooseNewDataObj.style.display = "none";
    } else {
        chooseNewDataObj.style.display = "";
    }
}


function main(container, tbContainer) {
    // Checks if the browser is supported
    if (!mxClient.isBrowserSupported()) {
        // Displays an error message if the browser is not supported.
        mxUtils.error('Browser is not supported!', 200, false);
    } else {
        mxConnectionHandler.prototype.connectImage = new mxImage('images/connector.gif', 16, 16);
        // Creates the graph inside the given container

        var graph = new mxGraph(container);
        var toolbar = new mxToolbar(tbContainer);
        toolbar.enabled = false

        // 禁止网页自带右键菜单Disables built-in context menu
        mxEvent.disableContextMenu(container);

        // Enables new connections in the graph
        graph.setConnectable(true);
        graph.setMultigraph(false);

        graph.setPanning(true);
        graph.setTooltips(true);

        // Stops editing on enter or escape keypress
        var keyHandler = new mxKeyHandler(graph);
        var rubberband = new mxRubberband(graph);

        // Automatically handle parallel edges
        var layout = new mxParallelEdgeLayout(graph);
        var layoutMgr = new mxLayoutManager(graph);

        //工具栏
        var addVertex = function(icon, w, h, style) {
            var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
            vertex.setVertex(true);
            addToolbarItem(graph, toolbar, vertex, icon);
        };

        //定制图标图片
        var style = new Object();
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_IMAGE] = 'img/txt.png';
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('TXT', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_IMAGE] = 'img/excel.png';
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('EXCEL', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_IMAGE] = 'img/database.png';
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('DB', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_IMAGE] = 'img/database.png';
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('Impute', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_IMAGE] = 'img/database.png';
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('DT', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_IMAGE] = 'img/database.png';
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('KMeans', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_IMAGE] = 'img/database.png';
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('ApplyModel', style);

        style = mxUtils.clone(style);
        style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
        style[mxConstants.STYLE_IMAGE] = 'img/database.png';
        style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
        graph.getStylesheet().putCellStyle('X-Validation', style);


        addVertex(document.getElementById('TXT'), 100, 100, 'TXT');
        addVertex(document.getElementById('EXCEL'), 100, 100, 'EXCEL');
        addVertex(document.getElementById('DB'), 100, 40, 'DB');
        addVertex(document.getElementById('Impute'), 100, 40, 'Impute');
        addVertex(document.getElementById('DT'), 100, 40, 'DT');
        addVertex(document.getElementById('KMeans'), 100, 40, 'KMeans');
        addVertex(document.getElementById('ApplyModel'), 100, 40, 'ApplyModel');
        addVertex(document.getElementById('X-Validation'), 100, 40, 'X-Validation');


        layoutMgr.getLayout = function(cell) {
            if (cell.getChildCount() > 0) {
                return layout;
            }
        };

        graph.getTooltipForCell = function(cell) {
            if (cell.style == 'TXT') {
                return cell.value;
            }
        }

        // 定制右键Installs a popupmenu handler using local function (see below).
        graph.panningHandler.factoryMethod = function(menu, cell, evt) {
            return createPopupMenu(graph, menu, cell, evt);
        };



        graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt) {
            selectionChanged(graph);
        });

        selectionChanged(graph);






    }
};

function addToolbarItem(graph, toolbar, prototype, image) {
    //alert('addToolbarItem');
    // Function that is executed when the image is dropped on
    // the graph. The cell argument points to the cell under
    // the mousepointer if there is one.

    var funct = function(graph, evt, cell, x, y) {

        graph.stopEditing(false);
        var vertex = graph.getModel().cloneCell(prototype);
        switch (vertex.style) {
            case 'TXT':
                {

                    var doc = mxUtils.createXmlDocument();
                    var node = doc.createElement('TXTNode');
                    node.setAttribute('filename', '');
                    vertex.value = node;
                }
        }



        vertex.geometry.x = x;
        vertex.geometry.y = y;

        var v1 = graph.addCell(vertex);
        graph.setSelectionCell(vertex);


    }

    // Creates the image which is used as the drag icon (preview)


    // Disables dragging if element is disabled. This is a workaround
    // for wrong event order in IE. Following is a dummy listener that
    // is invoked as the last listener in IE.
    mxEvent.addListener(image, 'mousedown', function(evt) {
        // do nothing
    });

    // This listener is always called first before any other listener
    // in all browsers.
    mxEvent.addListener(image, 'mousedown', function(evt) {
        if (image.enabled == false) {
            mxEvent.consume(evt);
        }
    });

    mxUtils.makeDraggable(image, graph, funct);

    return image;
}


function createPopupMenu(graph, menu, cell, evt) {
    if (cell != null) {

        if (cell.style == null) {
            menu.addItem('删除', 'images/delete2.png', function() {
                graph.removeCells([cell]);
            });
        } else {
            if (graph.getSelectionCount() == 1) {
                if (cell.style == 'TXT' || cell.style == 'EXCEL' || cell.style == 'DB') {
                    menu.addItem('删除', 'images/delete2.png', function() {
                        var cells = graph.getSelectionCells();
                        graph.removeCells(cells);
                    });
                    menu.addItem('复制', 'images/copy.png', function() {
                        var s = graph.gridSize;
                        graph.setSelectionCells(graph.moveCells([this.cell], s, s, true));
                    });
                    menu.addItem('编辑', 'images/plus.png', function() {

                        mxUtils.popup(null, true);
                    });
                    menu.addItem('执行', 'images/check.png', function() {

                        var executeCells = new ArrayList();
                        getIncomingCells(graph, cell, executeCells);
                        console.log(executeCells);

                        for (var i = 0; i < executeCells.size() - 1; i++) {
                            for (var j = executeCells.size() - 1; j > i; j--) {
                                if (executeCells.get(j).id == executeCells.get(i).id) {
                                    executeCells.remove(j);
                                }
                            }
                        }
                        console.log(executeCells);

                    });
                } else {
                    menu.addItem('删除', 'images/delete2.png', function() {
                        var cells = graph.getSelectionCells();
                        graph.removeCells(cells);
                    });
                    menu.addItem('执行', 'images/check.png', function() {
                        mxUtils.alert('MenuItem3: ' + graph.getSelectionCount() + ' selected');

                    });
                }

            } else {
                menu.addItem('删除', 'images/delete2.png', function() {
                    var cells = graph.getSelectionCells();
                    graph.removeCells(cells);
                });
            }

        }
    } else {
        menu.addItem('保存', 'editors/images/saveas.gif', function() {
            var enc = new mxCodec();
            var result = enc.encode(graph.getModel());
            var data = mxUtils.getPrettyXml(result);
            console.log(data);

        });
    }

};


function selectionChanged(graph) {
    var div = document.getElementById('properties');
    var mainRegionDiv = '<div id="mainRegion" style="height:400px"> 流程构造区</div>';
    var TXTRegionDiv = '<div id="TXTRegion" style="height:400px">' +
        '<label class="control-label">文件名称</label>' +
        '<div class="input-group">' +
        '<span class="input-group-addon">' +
        '<i class="fa fa-user"></i>' +
        '</span>' +
        '<input type="text" id="filename" name="filename" class="form-control" /> ' +
        '</div>' +
        '</div>';

    var uploadFileDiv = '<input id="newDataFile" type="checkbox" class="checkboxes" checked="" onClick="chooseNewDataFn(this)">上传新数据集' +
        '<div id="chooseNewData" style="display:">' +
        '<div class="col-md-offset-1 col-md-11"  >' +
        '<div class="fileinput fileinput-new" data-provides="fileinput">' +
        '<span class="btn green btn-file">' +
        '<span class="fileinput-new" >选择文件</span>' +
        '<span class="fileinput-exists"> 变更 </span>' +
        '<input type="file" name="file"> </span>' +
        '<span class="fileinput-filename"> </span> &nbsp;' +
        '<a href="javascript:;" class="close fileinput-exists" data-dismiss="fileinput"> </a>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-md-offset-8 col-md-4">' +
        '<input class="btn green fa fa-check" type="submit" value="上传" />' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<input id="InstanceDataFile" type="checkbox" class="mt-checkbox" onClick="chooseInstanceDataFn(this)">示例数据集' +
        '<div id="chooseInstanceData">' +

        '</div>' +
        '<input id="PersonDataFile" type="checkbox" class="mt-checkbox" onClick="choosePersonDataFn(this)">个人数据集' +
        '<div id="choosePersonData">' +

        '</div>';



    // Forces focusout in IE
    graph.container.focus();

    // Clears the DIV the non-DOM way
    div.innerHTML = '';

    // Gets the selection cell
    var cell = graph.getSelectionCell();



    if (cell == null) {
        div.innerHTML = mainRegionDiv;
    } else {
        console.log(cell);
        var cellStyle = cell.style;
        switch (cellStyle) {
            case 'TXT':
                {
                    div.innerHTML = uploadFileDiv;

                    //var attrs = cell.value.attributes;	
                    //for (var i = 0; i < attrs.length; i++){
                    //var input = document.getElementById(attrs[i].nodeName);
                    //cellAttributesChanged(graph, cell, attrs[i], input);//输入类型的属性值变化
                    //document.getElementById(attrs[i].nodeName).value = cell.getAttribute(attrs[i].nodeName);
                    //}

                }
        }

    }
}

function cellAttributesChanged(graph, cell, attribute, input) {
    var applyHandler = function() {

        var newValue = input.value || '';
        var oldValue = cell.getAttribute(attribute.nodeName, '');

        if (newValue != oldValue) {
            graph.getModel().beginUpdate();

            try {
                var edit = new mxCellAttributeChange(
                    cell, attribute.nodeName, newValue);
                graph.getModel().execute(edit);
                //graph.updateCellSize(cell);
            } finally {
                graph.getModel().endUpdate();
            }
        }
    };

    mxEvent.addListener(input, 'keypress', function(evt) {
        // Needs to take shift into account for textareas
        if (evt.keyCode == /*enter*/ 13 && !mxEvent.isShiftDown(evt)) {
            input.blur();
        }
    });

    if (mxClient.IS_IE) {
        mxEvent.addListener(input, 'focusout', applyHandler);
    } else {
        // Note: Known problem is the blurring of fields in
        // Firefox by changing the selection, in which case
        // no event is fired in FF and the change is lost.
        // As a workaround you should use a local variable
        // that stores the focused field and invoke blur
        // explicitely where we do the graph.focus above.
        mxEvent.addListener(input, 'blur', applyHandler);
    }
}


function getIncomingCells(graph, cell, executeCells) {
    var incomingEdgesOfCurrentCell = graph.getIncomingEdges(cell);
    var incomingEdgesLength = incomingEdgesOfCurrentCell.length;
    var incomingCells = new Array();
    if (incomingEdgesLength == 0) {
        executeCells.add(cell);
    } else {
        for (var i = 0; i < incomingEdgesLength; i++) {
            executeCells.add(cell);
            incomingCells[i] = incomingEdgesOfCurrentCell[i].source;
            getIncomingCells(graph, incomingCells[i], executeCells);
        }
    }
}
