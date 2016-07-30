<template>
  <div class="wrapper">
    <header class="main-header">
      <a href="/" class="logo">
        <!-- mini logo for sidebar mini 40x50 pixels -->
        <span class="logo-mini"><img src="/static/img/logo_sm.png" alt="Logo" class="img-responsive center-block"></span>
        <!-- logo for regular state and mobile devices -->
        <div class="container logo-lg">
          <div class="pull-left image"><img src="/static/img/logo_sm.png" alt="Logo" class="img-responsive"></div>
          <div class="pull-left info">泰豪电力</div>
        </div>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            
            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img v-bind:src=demo.avatar class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">{{ demo.displayName }}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left image">

          </div>
          <div class="pull-left info">
            <div><p class="white">{{ demo.displayName }}</p></div>
            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>

        <!-- search form (Optional) -->
        <form v-on:submit.prevent class="sidebar-form">
          <div class="input-group">
            <input type="text" name="search" id="search" class="search form-control" data-toggle="hideseek" placeholder="Search Menus" data-list=".sidebar-menu">
                <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>
        <!-- /.search form -->

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
          <li class="header">控制板</li>
<!--           <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">信息</span></a></li> -->

        <li class="treeview">
          <a href="">
            <i class="fa fa-server"></i>
            <span>数据导入</span>
          </a>

          <ul class="treeview-menu">
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">TXT</span></a></li>
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">EXCEL</span></a></li>
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">DB</span></a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="">
            <i class="fa fa-server"></i>
            <span>预处理</span>
          </a>

          <ul class="treeview-menu">
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">数据清洗</span></a></li>
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">数据清洗</span></a></li>
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">数据清洗</span></a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="">
            <i class="fa fa-server"></i>
            <span>算法</span>
          </a>

          <ul class="treeview-menu">
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">分类</span></a></li>
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">聚类</span></a></li>
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">模型应用</span></a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="">
            <i class="fa fa-server"></i>
            <span>验证</span>
          </a>

          <ul class="treeview-menu">
            <li class="active pageLink" v-on:click="toggleMenu"><a v-link="{path: '/'}"><i class="fa fa-desktop"></i><span class="page">交叉验证</span></a></li>
          </ul>
        </li>
<!--           <li class="pageLink" v-on:click="toggleMenu"><a v-link="{path: '/tables'}"><i class="fa fa-table"></i><span class="page">Tables</span></a></li>

          <li class="header">ME</li>
          <li class="pageLink" v-on:click="toggleMenu"><a v-link="{path: '/tasks'}"><i class="fa fa-tasks"></i><span class="page">Tasks</span></a></li>
          <li class="pageLink" v-on:click="toggleMenu"><a v-link="{path: '/setting'}"><i class="fa fa-cog"></i><span class="page">Settings</span></a></li>

          <li class="header">LOGS</li>
          <li class="pageLink" v-on:click="toggleMenu"><a v-link="{path: '/access'}"><i class="fa fa-book"></i><span class="page">Access</span></a></li>
          <li class="pageLink" v-on:click="toggleMenu"><a v-link="{path: '/server'}"><i class="fa fa-hdd-o"></i><span class="page">Server</span></a></li>
          <li class="pageLink" v-on:click="toggleMenu"><a v-link="{path: '/repos'}"><i class="fa fa-heart"></i><span class="page">Repos</span><small class="label pull-right bg-green">AJAX</small></a></li>

          <li class="header">PAGES</li>
          <li class="pageLink" v-on:click="toggleMenu"><a v-link="{path: '/login'}"><i class="fa fa-circle-o text-yellow"></i> <span class="page">Login</span></a></li>
          <li class="pageLink" v-on:click="toggleMenu"><a v-link="{path: '/404'}"><i class="fa fa-circle-o text-red"></i> <span class="page">404</span></a></li> -->
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
<!--       <section class="content-header">
        <h1>
          {{$route.name | uppercase }}
          <small>{{ $route.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-home"></i>Home</a></li>
          <li class="active">{{$route.name | uppercase }}</li>
        </ol>
      </section> -->

      <router-view></router-view>
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
<!--     <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="#">CoPilot</a>.</strong> All rights reserved.
    </footer> -->
  </div>
  <!-- ./wrapper -->
</template>

<script>
import faker from 'faker'
require('hideseek')

module.exports = {
  name: 'Dash',
  data: function () {
    return {
      section: 'Dash',
      me: '',
      error: '',
      api: {
        servers: {
          url: '', // Back end server
          result: []
        }
      }
    }
  },
  computed: {
    store: function () {
      return this.$parent.$store
    },
    state: function () {
      return this.store.state
    },
    callAPI: function () {
      return this.$parent.callAPI
    },
    demo: function () {
      return {
        displayName: faker.name.findName(),
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        randomCard: faker.helpers.createCard()
      }
    }
  },
  methods: {
    changeloading: function () {
      this.store.dispatch('TOGGLE_SEARCHING')
    },
    toggleMenu: function (event) {
      // remove active from li
      window.$('li.pageLink').removeClass('active')

      // Add it to the item that was clicked
      event.toElement.parentElement.className = 'pageLink active'
    }
  },
  ready: function () {
    // Page is ready. Let's load our functions!
  }
}
</script>

<style>
.user-panel {
  height: 4em;
}
.navbar , .logo{
  background-color: #007a77 !important;
}
</style>
