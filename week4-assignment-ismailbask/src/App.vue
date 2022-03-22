<template>
<!-- Page Wrapper -->
<div id="wrapper">
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <SidebarBrand></SidebarBrand>
    <SidebarMenu></SidebarMenu>
  </ul>
  <!-- End of Sidebar -->

<!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Topbar -->
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <TopbarSearch></TopbarSearch>
        <TopNavbar></TopNavbar>
      </nav>
      <!-- End of Topbar -->
      <ContentField></ContentField>
    </div>
    <!-- End of Main Content -->
    <!-- Footer -->
    <FooterField></FooterField>
    <!-- End of Footer -->
  </div>
</div>
<LogoutModal></LogoutModal>
<ScrollTop></ScrollTop>
</template>

<script>
// import SideBar from './components/SideBar'
// import TopBar from './components/TopBar'
import FooterField from './components/FooterField'
import ContentField from './components/ContentField'
import LogoutModal from './components/LogoutModal'
import ScrollTop from './components/ScrollTop'
import SidebarBrand from './components/SideBarComp/SidebarBrand.vue'
import SidebarMenu from './components/SideBarComp/SidebarMenu'
import TopbarSearch from './components/TopBarComp/TopbarSearch'
import TopNavbar from './components/TopBarComp/TopNavbar'
export default {
  name: 'App',
  components: {
    FooterField,
    ContentField,
    LogoutModal,
    ScrollTop,
    SidebarBrand,
    SidebarMenu,
    TopbarSearch,
    TopNavbar
  }
}
</script>
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
