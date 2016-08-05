<template>
  <!-- Main content -->
  <section class='content'>
    <!-- Info boxes -->
    <div class='row'>
      <div class="shu">
        <div class="col-md-12">
          <div class="box">
            <div class="box-body">
              <button class="btn btn-default">打开</button>
              <button class="btn btn-default">保存</button>
            </div>
          </div>
        </div>
        <div class="col-md-9 main-shu" id="gouzao">
          <div class="box box-success">
            <div class="box-header with-border">
                <!-- Nav tabs -->
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"> <h3 class="box-title">流程设计</h3></a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><h3 class="box-title">结果显示</h3></a></li>
              </ul>
              <div class="box-tools pull-right">
                <!-- Buttons, labels, and many other things can be placed here! -->
                <!-- Here is a label for example -->
                <!-- <span class="label label-primary">Label</span> -->
              </div><!-- /.box-tools -->
            </div><!-- /.box-header -->
            <div class="box-body">
              <div class="main-work">
                <!-- Tab panes -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane active" id="home">
                    <div id="graphContainer" class="scroller" style="height:400px" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">       
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane" id="profile">
                    <div id="resultContainer" class="scroller" style="height:400px" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">       
                    </div>                    
                  </div>
                </div>

              </div>
            </div><!-- /.box-body -->
          </div><!-- /.box -->
        </div>
        <div class="col-md-3 right-shu" id="canshu">
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">参数设置</h3>
              <div class="box-tools pull-right">
                <!-- Buttons, labels, and many other things can be placed here! -->
                <!-- Here is a label for example -->
                <!-- <span class="label label-primary">Label</span> -->
              </div><!-- /.box-tools -->
            </div><!-- /.box-header -->
            <div class="box-body">
              <div class="main-param">
                <div class="scroller" style="height:400px" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">
              </div>
            </div><!-- /.box-body -->
          </div><!-- /.box -->
        </div>
      </div>
      <div class="err-shu col-md-12">
        <div class="box box-success">
          <div class="box-header with-border">
            <h3 class="box-title">错误提示</h3>
            <div class="box-tools pull-right">
              <!-- Buttons, labels, and many other things can be placed here! -->
              <!-- Here is a label for example -->
              <!-- <span class="label label-primary">Label</span> -->
            </div><!-- /.box-tools -->
          </div><!-- /.box-header -->
          <div class="box-body">
            <div class="main-err">
              <div class="scroller" style="height:200px" data-rail-visible="1" data-rail-color="yellow" data-handle-color="#a1b2bd">
                      <h4>Heading Text</h4>
                      <p> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                        eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
                        sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
                        mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </p>
                      <p> nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
                        mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
                        sit amet fermentum. </p>
                    </div>
            </div>
          </div><!-- /.box-body -->
        </div><!-- /.box -->
      </div>
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<style>
.box-header a {
  color: #007a77;
}
</style>

<script>
import mxGraph from '/static/src/js/mxClient.js'
module.exports = {
  ready: function () {
    console.log(mxGraph)
    var container = document.getElementById('graphContainer')
    container.style.background = 'url(../../../static/src/images/window.gif )'
    var graph = new mxGraph(container)
    var parent = graph.getDefaultParent()
    // 画方块
    graph.insertVertex(parent, null, 'Hello', 50, 50, 80, 30)
    graph.insertVertex(parent, null, 'World', 200, 50, 80, 30)
  }
}
</script>
