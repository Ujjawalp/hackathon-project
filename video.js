document.getElementById('openVideoModal').addEventListener('click', function() {
    document.getElementById('videoModal').classList.remove('hidden');
    document.getElementById('videoFrame').src += '&autoplay=1';
  });
  
  document.getElementById('closeVideoModal').addEventListener('click', function() {
    document.getElementById('videoModal').classList.add('hidden');
    document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/W6NZfCO5SIk?autoplay=0';
  });
  