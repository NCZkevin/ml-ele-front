<template>
  <!-- Main content -->
  <section class='content'>
    <!-- Info boxes -->
    <div class='row'>
      <div class="shu">
        <div class="col-md-9 main-shu" id="gouzao">
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">流程构造</h3>
              <div class="box-tools pull-right">
                <!-- Buttons, labels, and many other things can be placed here! -->
                <!-- Here is a label for example -->
                <!-- <span class="label label-primary">Label</span> -->
              </div><!-- /.box-tools -->
            </div><!-- /.box-header -->
            <div class="box-body">
              <div class="main-work">
                
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
              
            </div>
          </div><!-- /.box-body -->
        </div><!-- /.box -->
      </div>
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<<style>
.main-shu {
  height: 500px;
}
.right-shu {
  height: 500px;
}
.err-shu {
  margin-top: 10px;
}
</style>

<script>

module.exports = {
  ready: function () {
  }
}
</script>
