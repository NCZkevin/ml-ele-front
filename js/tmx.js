
var graph;

function main(container,tbContainer){




	// Checks if the browser is supported
	if (!mxClient.isBrowserSupported()){
		// Displays an error message if the browser is not supported.
		mxUtils.error('Browser is not supported!', 200, false);
	}else{
		mxConnectionHandler.prototype.connectImage = new mxImage('img/connector.gif', 16, 16);
		// Creates the graph inside the given container

		graph = new mxGraph(container);
		var toolbar = new mxToolbar(tbContainer);
		toolbar.enabled = false

		// 禁止网页自带右键菜单Disables built-in context menu
		mxEvent.disableContextMenu(container);

		// Enables new connections in the graph
		graph.setConnectable(true);
		graph.setMultigraph(false);
		graph.setAllowDanglingEdges(false);

		graph.setPanning(true);
		graph.setTooltips(true);

		// Stops editing on enter or escape keypress
		var keyHandler = new mxKeyHandler(graph);
		var rubberband = new mxRubberband(graph);

		// Automatically handle parallel edges
		var layout = new mxParallelEdgeLayout(graph);
		var layoutMgr = new mxLayoutManager(graph);

		//工具栏
		var addVertex = function(icon, w, h,style){
			var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
			vertex.setVertex(true);
			addToolbarItem(graph, toolbar, vertex, icon);
		};

		//定制图标图片
		var style = new Object();
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/txt.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#ff000000';
		graph.getStylesheet().putCellStyle('TXT', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/excel.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('EXCEL', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/personal.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('personal', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/exampleSet.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('exampleSet', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/meanImpute.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('meanImpute', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/insertImpute.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('insertImpute', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/modeImpute.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('modeImpute', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/deleteImpute.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('deleteImpute', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/KMeans.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('KMeans', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/ID3.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('ID3', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/LR.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('LR', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/cross.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('X-Validation', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/selectNode.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('selectNode', style);

		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/rollbackNode.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('rollbackNode', style);

		addVertex(document.getElementById('TXT'), 80, 80, 'TXT');
		addVertex(document.getElementById('EXCEL'), 80, 80, 'EXCEL');
		addVertex(document.getElementById('personal'), 80, 80, 'personal');
		addVertex(document.getElementById('exampleSet'), 80, 80, 'exampleSet');
		addVertex(document.getElementById('meanImpute'), 80, 80, 'meanImpute');
		addVertex(document.getElementById('insertImpute'), 80, 80, 'insertImpute');
		addVertex(document.getElementById('modeImpute'), 80, 80, 'modeImpute');
		addVertex(document.getElementById('deleteImpute'), 80, 80, 'deleteImpute');
		addVertex(document.getElementById('ID3'), 80, 80, 'ID3');
		addVertex(document.getElementById('LR'), 80, 80, 'LR');
		addVertex(document.getElementById('KMeans'), 80, 80, 'KMeans');
		addVertex(document.getElementById('X-Validation'), 80, 80,'X-Validation');
		addVertex(document.getElementById('selectNode'), 80, 80,'selectNode');
		addVertex(document.getElementById('rollbackNode'), 80, 80,'rollbackNode');


		layoutMgr.getLayout = function(cell){
			if (cell.getChildCount() > 0){
				return layout;
			}
		};

		graph.getTooltipForCell = function(cell){
			if(cell.style == 'TXT'){
				return cell.value;
			}
		}

		// 定制右键Installs a popupmenu handler using local function (see below).
		graph.panningHandler.factoryMethod = function(menu, cell, evt){
			return createPopupMenu(graph, menu, cell, evt);
		};

		graph.convertValueToString = function(cell){
			return '';
		};


		graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt){
			selectionChanged(graph);
		});

		selectionChanged(graph);






	}
};

function addToolbarItem(graph, toolbar, prototype, image){
	//alert('addToolbarItem');
	// Function that is executed when the image is dropped on
	// the graph. The cell argument points to the cell under
	// the mousepointer if there is one.


	var funct = function(graph, evt, cell, x, y){

		graph.stopEditing(true);
		var vertex = graph.getModel().cloneCell(prototype);
		switch(vertex.style){
			case 'TXT': {
				var doc = mxUtils.createXmlDocument();
				var node = doc.createElement('TXTNode');
				node.setAttribute('type', 'dataSource'); //节点类型
				node.setAttribute('file', ''); //文件信息
				node.setAttribute('filename', ''); //文件名
				node.setAttribute('fileAddress', ''); //文件地址
				node.setAttribute('ext', ''); //后缀名
				node.setAttribute('attributes', ''); //首行是否为属性名
				node.setAttribute('split', ''); //分隔符
				node.setAttribute('allAttributes', ''); //选择属性，最后一项为输出属性
				node.setAttribute('allAttributesName', ''); //选择属性名称，最后一项为输出属性
				node.setAttribute('attrsName', ''); //属性名称
				vertex.setValue(node);
				break;
			}
			case 'EXCEL': {
				var doc = mxUtils.createXmlDocument();
				var node = doc.createElement('EXCELNode');
				node.setAttribute('type', 'dataSource');
				node.setAttribute('file', '');
				node.setAttribute('filename', '');
				node.setAttribute('fileAddress', '');
				node.setAttribute('ext', '');
				node.setAttribute('attributes', '');
				node.setAttribute('split', '');
				node.setAttribute('allAttributes', '');
				node.setAttribute('allAttributesName', '');
				node.setAttribute('attrsName', ''); //属性名称
				vertex.setValue(node);
				break;
			}
			case 'ID3': {
				var doc = mxUtils.createXmlDocument();
				var node = doc.createElement('ID3Node');
				node.setAttribute('type', 'Algorithm');		 //节点类型
				node.setAttribute('Alg', 'ID3');			//算法名称
				vertex.setValue(node);
				break;
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
	mxEvent.addListener(image, 'mousedown', function(evt){
		// do nothing
	});

	// This listener is always called first before any other listener
	// in all browsers.
	mxEvent.addListener(image, 'mousedown', function(evt){
		if (image.enabled == false){
			mxEvent.consume(evt);
		}
	});

	mxUtils.makeDraggable(image, graph, funct);

	return image;
}


function createPopupMenu(graph, menu, cell, evt){
	if (cell != null){

		if(cell.style == null){
			menu.addItem('删除', 'img/delete2.png', function(){
				graph.removeCells([cell]);
			});
		}else{
			if(graph.getSelectionCount() == 1){
				if(cell.style == 'TXT' || cell.style == 'EXCEL' || cell.style == 'personal' || cell.style == 'exampleSet'){
					menu.addItem('删除', 'img/delete2.png', function(){
						var cells = graph.getSelectionCells();
						graph.removeCells(cells);
					});
					menu.addItem('复制', 'img/copy.png', function(){
						var s = graph.gridSize;
						graph.setSelectionCells(graph.moveCells([this.cell], s, s, true));
					});
					menu.addItem('编辑', 'img/plus.png', function(){
						$('#editModal').modal('show');
						var selectionCellValue = graph.getSelectionCell().value;
						var allAttributes = selectionCellValue.getAttribute('allAttributes');
						var attrNames = selectionCellValue.getAttribute('attrNames');
						var data=attrNames.split(',');
						$('#editOfDI').children('tbody').html("");
						var tbody = "";
						 $.each(data, function (index, el) {
						   var tr = "<tr>";
						   tr += "<td><input name='attrCheckbox' type='checkbox' value='"+ index +"' /></td>";
						   tr += "<td>" + data[index] + "</td>";
						   tr += "<td><select id='inAndOut"+ index +"''><option value ='input' selected>输入</option><option value ='output'>输出</option> </select></td>";
						   tr += "</tr>";
						   tbody += tr;
						 });
						 $('#editOfDI').children('tbody').append(tbody);
						if(allAttributes != ''){
							var selected = allAttributes.split(',');
							var checkValue = $("input[name='attrCheckbox']");
							console.log($("input[name='attrCheckbox']")[0]);
							for(var i = 0; i<selected.length; i++){
								for(var j = 0; j<checkValue.length; j++){
									if(selected[i] == checkValue[j].value ){
										checkValue[j].checked = true;
										break;
									}
								}
							}
						}

					});
					menu.addItem('执行', 'img/check.png', function(){
						var executeCells = new ArrayList();
						getIncomingCells(graph,cell,executeCells);
						console.log(executeCells);

						for (var i = 0 ; i < executeCells.size() - 1; i++ ) {
							for (var j = executeCells.size() - 1; j > i; j-- ) {
								if (executeCells.get(j).id == executeCells.get(i).id) {
									executeCells.remove(j);
								}
							}
						}
						console.log(executeCells);

					});
				}else if(cell.style == 'ApplyModel'){
					menu.addItem('删除', 'img/delete2.png', function(){
						var cells = graph.getSelectionCells();
						graph.removeCells(cells);
					});
					menu.addItem('查看', 'img/check.png', function(){
						$('#modelModal').modal('show');
						var selectionCellValue = graph.getSelectionCell().value;
						var imgUrl = selectionCellValue.getAttribute('modelImage') ;
						console.log(imgUrl);
						$('#modelInfo').html('');
						$('#modelInfo').append('<img src="'+imgUrl+'" alt="">');
					});
					menu.addItem('执行', 'img/check.png', function(){

					});
				}else{
					menu.addItem('删除', 'img/delete2.png', function(){
						var cells = graph.getSelectionCells();
						graph.removeCells(cells);
					});
					menu.addItem('执行', 'img/check.png', function(){
						// mxUtils.alert('MenuItem3: '+graph.getSelectionCount()+' selected');
						// alert('程序执行中')

						var fileAddress;
						var Alg;
						var isFirstRow;
						var split;
						var allAttributes = [];
						var allAttributesName = [];

						var executeCells = new ArrayList();
						getIncomingCells(graph,cell,executeCells);
						for (var i = 0 ; i < executeCells.size() - 1; i++ ) {
							for (var j = executeCells.size() - 1; j > i; j-- ) {
								if (executeCells.get(j).id == executeCells.get(i).id) {
									executeCells.remove(j);
								}
							}
						}

						var len = executeCells.size();
						for(var i = 0 ; i < len; i++){
							console.log(executeCells.get(i));
							var value = executeCells.get(i).value;
							var type = value.getAttribute('type');
							if(type == 'dataSource'){
								fileAddress = value.getAttribute('fileAddress');
								isFirstRow = value.getAttribute('attributes');
								split = value.getAttribute('split');
								var allArray = value.getAttribute('allAttributes').split(',');
								for(var i = 0; i < allArray.length; i++){
									allAttributes[i] = parseInt(allArray[i]);

								}
								allAttributesName =  value.getAttribute('allAttributesName').split(',');
							}else if(type == 'Algorithm'){
								Alg = value.getAttribute('Alg');
							}

						}


						$('#proModal').modal('show');
						// getstate();

				        $.ajax({
				            url: "http://52.69.16.38:8000/makeModel",
				            method: "POST",
				            data: JSON.stringify({
				              "trainData":fileAddress,
				              "Alg":Alg, // 先写ID3
				              "param":{
								"flag":  isFirstRow,//首行是否为属性名
								"attributes":allAttributesName,  //属性名称
								"ignore": allAttributes, //属性下标
				                "split":split,//分割符
				              }
				            }),
				            contentType: "application/json;charset=UTF-8",
				            success: function (data, textStatus, xhr) {
				            	getstate();
				                data=eval("("+data+")");
								if(data.result == "执行成功"){
									var imgUrl = 'http://52.69.16.38:8000/' + data.modelImage ;
									var modelName = data.modelName ;
									$('#myresult').html('');
									$('#myresult').append('<img src="'+imgUrl+'" alt="">');

									addModelNode(imgUrl,modelName);
								}
				                alert(data.result);


				            },
				            error: function() {
				            	alert("失败");
				            }
				        });
					});
				}

			}else{
				menu.addItem('删除', 'img/delete2.png', function(){
					var cells = graph.getSelectionCells();
					graph.removeCells(cells);
				});
			}

		}
	}else{
		menu.addItem('保存', 'editors/img/saveas.gif', function(){
			var enc = new mxCodec();
			var result = enc.encode(graph.getModel());
			var data = mxUtils.getPrettyXml(result);


		});
	}

};

function addModelNode(modelImage,modelName){

	var parent = graph.getDefaultParent();
	// Adds cells to the model in a single step
	graph.getModel().beginUpdate();
	try
	{
		var style = new Object();
		style = mxUtils.clone(style);
		style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
		style[mxConstants.STYLE_IMAGE] = 'img/ModelApplier.png';
		style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
		graph.getStylesheet().putCellStyle('ApplyModel', style);

		var doc = mxUtils.createXmlDocument();
		var node = doc.createElement('modelNode');
		node.setAttribute('type', 'modelApplier');
		node.setAttribute('modelImage', modelImage);
		node.setAttribute('modelName', modelName);

		graph.insertVertex( parent,null,node,20, 20,80, 80,'ApplyModel');



	}
	finally
	{
		// Updates the display
		graph.getModel().endUpdate();
	}

}

function selectionChanged(graph){
	var div = document.getElementById('properties');
	var mainRegionDiv = '<div id="mainRegion" style="height:400px"> 参数设置区域</div>';
	var txtUploadFileDiv = '<div style="display:">'+
							'<form id= "uploadForm"> ' 	+
								'<div class="col-md-offset-1 col-md-11 form-group">'+
									'<label for="exampleInputFile">文件上传'+'</label>'+
									'<input type="text" name="fileName" id="fileName" style="width:150px;">'+
									'<input type="file"  name="file" id="exampleInputFile" style="width:72px;" accept="text/plain" onchange="showFilename(this.value)">'+
									'<label for="exampleInputFile" hidden="true">文件后缀'+'</label>' +
									'<input type="text" id="ext" name="ext" hidden="true" value="txt"><br/>' +
									'<input type="checkbox"  id="attributes" name="attributes" value="0" onClick="valueChangedFn()"> 首行是否为属性名 <br/>'+
									'分隔符<input type="radio" id="split" name="split" value=" " > 空格<input type="radio"  id="split" name="split" value="," checked> 逗号<input type="radio"  id="split" name="split" value="\t" > Tab '+
								'</div>'+
								'<div class="row">'+
									'<div class="col-md-12">'+
										'<input class="btn btn-primary col-md-12" type="button" onclick="uploadFile()" value="上传" />'+
									'</div>'+
								'</div>'+
							'</form>' +
						'</div>';
	var excelUploadFileDiv = '<div style="display:">'+
							'<form id= "uploadForm"> ' 	+
								'<div class="col-md-offset-1 col-md-11 form-group">'+
									'<label for="exampleInputFile">文件上传'+'</label>'+
									'<input type="text" name="fileName" id="fileName" style="width:150px;">'+
									'<input type="file"  name="file" id="exampleInputFile" style="width:72px;" accept="application/vnd.ms-excel" onchange="showFilename(this.value)">'+
									'<label for="exampleInputFile" hidden="true">文件后缀'+'</label>' +
									'<input type="text" id="ext" name="ext" hidden="true" value="xls"><br/>' +
									'<input type="checkbox"  id="attributes" name="attributes" value="0" onClick="valueChangedFn()"> 首行是否为属性名 <br/>'+
									'分隔符<input type="radio" id="split" name="split" value=" " > 空格<input type="radio"  id="split" name="split" value="," checked> 逗号<input type="radio"  id="split" name="split" value="\t" > Tab '+
								'</div>'+
								'<div class="row">'+
									'<div class="col-md-12">'+
										'<input class="btn btn-primary col-md-12" type="button" onclick="uploadFile()" value="上传" />'+
									'</div>'+
								'</div>'+
							'</form>' +
						'</div>';
	var dtDiv = '';

	var personDiv =
		'<h4>个人数据集</h4>' +
		'<div class="form-group">' +
	      '<div class="radio">' +
	        '<label>' +
	          '<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">	          train01 ' +
	        '</label>' +
	      '</div>' +
	      '<div class="radio">' +
	        '<label>' +
	          '<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">	          train02 ' +
	        '</label>' +
	      '</div>'+
	    '</div>';





	// Forces focusout in IE
	graph.container.focus();

	// Clears the DIV the non-DOM way
	div.innerHTML = '';

	// Gets the selection cell
	var cell = graph.getSelectionCell();



	if (cell == null){
		div.innerHTML = mainRegionDiv;
	}else{

		var cellStyle = cell.style;

		switch(cellStyle){
			case 'ID3':
				div.innerHTML = dtDiv;
				 break;

			case 'TXT':
				div.innerHTML = txtUploadFileDiv;
				var selectionCellValue = graph.getSelectionCell().value;
				var attr = selectionCellValue.getAttribute('attributes');
				if(attr == 0){
					$("input[name='attributes']").get(0).checked=false;
				}else if(attr == 1){
					$("input[name='attributes']").get(0).checked=true;
				}else{
					$("input[name='attributes']").get(0).checked=false;
				}
				var split = selectionCellValue.getAttribute('split');
				if(split == ' '){
					$("input[name='split']").get(0).checked=true;
					$("input[name='split']").get(1).checked=false;
					$("input[name='split']").get(2).checked=false;
				}else if(split == ','){
					$("input[name='split']").get(0).checked=false;
					$("input[name='split']").get(1).checked=true;
					$("input[name='split']").get(2).checked=false;
				}else if(split == '\t'){
					$("input[name='split']").get(0).checked=false;
					$("input[name='split']").get(1).checked=false;
					$("input[name='split']").get(2).checked=true;
				}else{
					$("input[name='split']").get(0).checked=false;
					$("input[name='split']").get(1).checked=true;
					$("input[name='split']").get(2).checked=false;
				}
				var filename = selectionCellValue.getAttribute('filename');
				console.log(filename);
				if(filename != ''){
					//给file标签赋值
					$("#fileName").val(filename);
				}



				break;


			case 'EXCEL':
				div.innerHTML = excelUploadFileDiv;
				 break;

			case 'personal':
				div.innerHTML = personDiv;
				 break;


		}

	}
}

function showFilename(value){
	console.log(value);
	$("#fileName").val(value.substring(12,value.length));
}

function attrsConfirmFn(){
	var decisionAttr = '';
	var data = [];
	var allAttributes = [];
	var allAttributesName = [];
	$("#editOfDI").find(":checkbox:checked").each(function(){
		var val = $(this).val();
		data.push(val);
    });


	var len = data.length;
	var j = 0;
	if(len > 0){
		for (var i = 0; i <len; i++){
			var val = $('#inAndOut'+data[i]).val();
			if(val == 'output'){
				decisionAttr = data[i];
			}else if(val == 'input'){
				allAttributes[j] = data[i];
				j++;
			}
		}
	}else{
		alert('请选择所需属性！');
	}


	if(decisionAttr != ''){
		allAttributes.push(decisionAttr);
	}

	console.log(allAttributes);

	var selectionCellValue = graph.getSelectionCell().value;
	var attrNames = selectionCellValue.getAttribute('attrNames').split(',');


	for (var i = 0; i <allAttributes.length; i++){
		allAttributesName[i] = attrNames[allAttributes[i]];
	}

	selectionCellValue.setAttribute('allAttributes', allAttributes );
	selectionCellValue.setAttribute('allAttributesName', allAttributesName );



}

function selectAll(){
	var attr = $('#inputAttr')
	var flag = attr.is(':checked');
	console.log(flag);

	if(flag){
        $("input[name='attrCheckbox']").attr("checked", true);
    }else{
        $("input[name='attrCheckbox']").attr("checked", false);
    }
}

function valueChangedFn(){
	var attr = $('#attributes')
	var flag = attr.is(':checked');
	if(flag){
		attr.val(1);
	}else{
		attr.val(0);
	}
}

function uploadFile() {
     var formData = new FormData($( "#uploadForm" )[0]);
	 var attrs = $( "#attributes" ).val();
	 if(attrs == 0){
		 formData.append("attributes",attrs);
	 }
	var selectionCellValue = graph.getSelectionCell().value;
	var file = formData.get('file');
	console.log(file);
	console.log($("#exampleInputFile")[0].files[0]);
	var filename = $("#exampleInputFile")[0].files[0].name;
	var ext =  formData.get('ext');
	var split =  formData.get('split');
	selectionCellValue.setAttribute('file', file );
	selectionCellValue.setAttribute('filename', filename );
	selectionCellValue.setAttribute('ext', ext );
	selectionCellValue.setAttribute('attributes', attrs );
	selectionCellValue.setAttribute('split', split );



     $.ajax({
          url: 'http://52.69.16.38:8000/uploadFile' ,
          type: 'POST',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: function (returndata) {
          	  var data = returndata;
          	  // var num = data.indexOf("/");
          	  // data =
			  data=eval("("+data+")");
			  var selectionCellValue = graph.getSelectionCell().value;
			  selectionCellValue.setAttribute('fileAddress', data.uploadFile);
			  selectionCellValue.setAttribute('attrNames', data.attributes);

              alert("上传成功，数据已保存");

          },
          error: function (returndata) {
              alert(returndata);
          }
     });
}
function prosess(data) {
	// $('#myprogress').css('width','0');
	alert(data);
	if (data.DATASET_STATE == 2 && data.PREPRO_STATE == 0 && data.ALG_STATE == 0 ) {
		$('#myprogress').css('width','33%');
	}
	if (data.PREPRO_STATE == 2 && data.ALG_STATE == 0 ) {
		$('#myprogress').css('width','66%');
	}
	if (data.ALG_STATE == 2 ) {
		$('#myprogress').css('width','100%');
		$(".modal-body > h4").text('完成运算');
		//getResult();
	}

}

function getResult() {
	$.ajax({
		url: 'http://52.69.16.38:8000/result',
		type: 'GET',
		success: function(resdata) {

		},
		error: function(resdata) {
			alert(resdata);
		}
	});
}

function getstate() {
	$.ajax({
		url: 'http://52.69.16.38:8000/state',
		type: 'GET',
		success: function(resdata) {
			var data1 = eval('(' + resdata + ')');
			// console.log(data1);
			// console.log(data1.DATASET_STATE);
			prosess(data1);
			if (data1.ALG_STATE != 2) {
				setTimeout(getstate,1000);
			}
		},
		error: function(resdata) {
			alert(resdata);
		}
	});
}

function cellAttributesChanged(graph,  cell, attribute,input){
	var applyHandler = function(){

		var newValue = input.value || '';
		var oldValue = cell.getAttribute(attribute.nodeName, '');

		if (newValue != oldValue){
			graph.getModel().beginUpdate();

            try{
            	var edit = new mxCellAttributeChange(
                           cell, attribute.nodeName,newValue);
               	graph.getModel().execute(edit);
               //graph.updateCellSize(cell);
            }finally{
                graph.getModel().endUpdate();
            }
		}
	};

	mxEvent.addListener(input, 'keypress', function (evt){
		// Needs to take shift into account for textareas
		if (evt.keyCode == /*enter*/13 && !mxEvent.isShiftDown(evt)){
			input.blur();
		}
	});

	if (mxClient.IS_IE){
		mxEvent.addListener(input, 'focusout', applyHandler);
	}else{
		// Note: Known problem is the blurring of fields in
		// Firefox by changing the selection, in which case
		// no event is fired in FF and the change is lost.
		// As a workaround you should use a local variable
		// that stores the focused field and invoke blur
		// explicitely where we do the graph.focus above.
		mxEvent.addListener(input, 'blur', applyHandler);
	}
}


function getIncomingCells(graph,cell,executeCells){
	var incomingEdgesOfCurrentCell = graph.getIncomingEdges(cell);
	var incomingEdgesLength = incomingEdgesOfCurrentCell.length;
	var incomingCells = new Array();
	if(incomingEdgesLength == 0){
		executeCells.add(cell);
	}else{
		for(var i = 0; i < incomingEdgesLength; i++){
			executeCells.add(cell);
			incomingCells[i] = incomingEdgesOfCurrentCell[i].source;
			getIncomingCells(graph,incomingCells[i],executeCells);
		}
	}
}

// Custom parser for simple file format
function parse(graph, filename)
{
	var model = graph.getModel();

	// Gets the default parent for inserting new cells. This
	// is normally the first child of the root (ie. layer 0).
	var parent = graph.getDefaultParent();

	var req = mxUtils.load(filename);
	var text = req.getText();

	var lines = text.split('\n');

	// Creates the lookup table for the vertices
	var vertices = [];

	// Parses all lines (vertices must be first in the file)
	graph.getModel().beginUpdate();
	try
	{
		for (var i=0; i<lines.length; i++)
		{
			// Ignores comments (starting with #)
			var colon = lines[i].indexOf(':');

			if (lines[i].substring(0, 1) != "#" ||
				colon == -1)
			{
				var comma = lines[i].indexOf(',');
				var value = lines[i].substring(colon+2, lines[i].length);

				if (comma == -1 || comma > colon)
				{
					var key = lines[i].substring(0, colon);

					if (key.length > 0)
					{
						vertices[key] = graph.insertVertex(parent, null, value, 0, 0, 80, 70);
					}
				}
				else if (comma < colon)
				{
					// Looks up the vertices in the lookup table
					var source = vertices[lines[i].substring(0, comma)];
					var target = vertices[lines[i].substring(comma+1, colon)];

					if (source != null && target != null)
					{
						var e = graph.insertEdge(parent, null, value, source, target);

						// Uses the special 2-way style for 2-way labels
						if (value.indexOf('2-Way') >= 0)
						{
							e.style = '2way';
						}
					}
				}
			}
		}
	}
	finally
	{
		graph.getModel().endUpdate();
	}
};

// Parses the mxGraph XML file format
function read(graph, filename)
{
	var req = mxUtils.load(filename);
	var root = req.getDocumentElement();
	var dec = new mxCodec(root.ownerDocument);

	dec.decode(root, graph.getModel());
};

function readFile(){
	var filename = document.getElementById("xmlfile").value;
 // alert( document.getElementById("xmlfile").value);
 read(graph, filename);
}

function getGraphXml(ignoreSelection)
{
	ignoreSelection = (ignoreSelection != null) ? ignoreSelection : true;
	var node = null;

	if (ignoreSelection)
	{
		var enc = new mxCodec(mxUtils.createXmlDocument());
		node = enc.encode(this.graph.getModel());
	}
	else
	{
		node = this.graph.encodeCells(this.graph.getSelectionCells());
	}

	if (this.graph.view.translate.x != 0 || this.graph.view.translate.y != 0)
	{
		node.setAttribute('dx', Math.round(this.graph.view.translate.x * 100) / 100);
		node.setAttribute('dy', Math.round(this.graph.view.translate.y * 100) / 100);
	}

	node.setAttribute('grid', (this.graph.isGridEnabled()) ? '1' : '0');
	node.setAttribute('gridSize', this.graph.gridSize);
	node.setAttribute('guides', (this.graph.graphHandler.guidesEnabled) ? '1' : '0');
	node.setAttribute('tooltips', (this.graph.tooltipHandler.isEnabled()) ? '1' : '0');
	node.setAttribute('connect', (this.graph.connectionHandler.isEnabled()) ? '1' : '0');
	node.setAttribute('arrows', (this.graph.connectionArrowsEnabled) ? '1' : '0');
	node.setAttribute('fold', (this.graph.foldingEnabled) ? '1' : '0');
	node.setAttribute('page', (this.graph.pageVisible) ? '1' : '0');
	node.setAttribute('pageScale', this.graph.pageScale);
	node.setAttribute('pageWidth', this.graph.pageFormat.width);
	node.setAttribute('pageHeight', this.graph.pageFormat.height);

	if (this.graph.background != null)
	{
		node.setAttribute('background', this.graph.background);
	}

	return node;
};
