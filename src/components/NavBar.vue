<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div class="container px-5">
            <a class="navbar-brand fw-bold" href="/#page-top">TideBitWallet</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="bi-list"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li class="nav-item"><a class="nav-link me-lg-3" href="/#desc">產品說明</a></li>
                    <li class="nav-item"><a class="nav-link me-lg-3" href="/#features">產品特色</a></li>
                    <li class="nav-item"><a class="nav-link me-lg-3" href="/#features-2">功能特色</a></li>
                </ul>
                <a class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" href="#download" data-bs-target="#feedbackModal">
                    <span class="d-flex align-items-center">
                        <span class="small">下載</span>
                    </span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
