<template>
    <div>
      <h1>About Page</h1>
      <ImagenesCarousel />
      <!-- Your page content here -->
    </div>
  </template>
  
  <script>
  import ImagenesCarousel from '../components/ImagenesCarousel';

export default {
  name: 'PaginaInicio', 
  componets: {
    ImagenesCarousel,
  },
}

</script>

  
  <style scoped>
  /* Your component-specific styles here */
  h1 {
    color: #333;
  }

  
  </style>