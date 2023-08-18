<template>
  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="avatar-container">
            <div class="avatar-container__img-skeleton"></div>
            <div class="avatar-container__username-skeleton"></div>
            <p class="avatar-container__bio-skeleton"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar-container__img-skeleton {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 1rem;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}

.avatar-container__username-skeleton {
  width: 25%;
  height: 1.5rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}

.avatar-container__bio-skeleton {
  width: 30%;
  height: 5rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>
