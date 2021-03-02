<script>
fetch('https://arthurcarayon.github.io/interflow/u.json')
    .then(res => res.json())
    .then((out) => {
        if(out.dead === "true"){
          document.getElementById('head-h1').textContent = out.msg;
          document.getElementsByClassName('features-images')[0].style.visibility = 'hidden';
          document.getElementsByClassName('data-scientists')[0].style.visibility = 'hidden';
          document.getElementsByClassName('benefits')[0].style.visibility = 'hidden';
          var myClasses = document.querySelectorAll('.button'),
          i = 0,
          l = myClasses.length;

          for (i; i < l; i++) {
              myClasses[i].style.display = 'none';
          }
        }
});
</script>