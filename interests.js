var col1 = 100;
var col2 = 200;
var col3 = 300;

function addCard(divID){
  if(divID == interest1){
    var tweet = $(`
      <div class="card" id="${col1}">
        <img class="card-img-top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8dofIAm/EAmvEAnfIUn/L4/P/t9/5TsvT0+/4yp/Pm8/3E4vus1/l7wfb6/f/L5vtMr/RkuPWKyPe12/qd0PjZ7fxru/Ufo/Lh8f283/o/q/Pq9f6Xzfim1Pmw2fnQ6fyFxfd3v/ahiQIeAAAJFElEQVR4nO2d67qqIBCGE5hSO5jawSwru/+L3Fprr5YnBGRQn4f3795L/QKGYWaAxcJisVgsFovFYrFYLBaLxWKxWCyWsViun5v0sd0e0udlOfbH6CbYH88+o4R9IJQlYX64jf1Zurjd3UIbOBUAgFFntwnG/rrBLLdhQ90fmcTZnaQeh/Wdqqx3tFPef5E0TEUfdwlXmF8rz/pM+PJ+RJLkIfI4L6cR9idLEeRURN9Ho7/ve5wXMyAbEx8uysFhgvre0IjbAVcxYw4kpj5eAM8V6qB/25F1d9XL6/00due98p5rV8Fh02Nf2pvx3PEw99PdAbhTi0MPGFLayYRHYAXmN3vq+uj/7w0s473zyBz6xBJUJyIq+spWYlWDc7tfv7NNTxMmUPz5GlXXL66UialKpN+5cX0vfIU//0a2vJce3v818dDVFZPEVamH/oe+7c0qzX1a/aHgyn3t9fOffANeYDhIYCHxeHj5jEH9MfTCe+vpZ2BAOHmBhUFptcN8M7OI//8Nw3Z7zupjkEtPHy3tjBmJmaoV7RMIfJf7RL//F1XihnZ/5CD6Zrrsb9dBlBg0zIMugdyJYlEf/czFUhhhCTz2vDiovRhLIlYfJXHtRcv6oDzVhz9cUYIBDk4T0prAS96Y8x4NCw4tLu5gYpyJotpFg4NLaMM1y5u/LThcD0GFG04frSyJNi9gf13X/7QaAKY7IPDC6KOQ/EbivPQM5TqK7Zrvvrb/ONwFszQrjLmeRj+O9DNzf5y5Vuem48clHUtqNRBGIThFDw0uaRyy35Bru3PTNUDYVaO9QZjs/ft9FzrVgCtti8l5nSagvqQewAHDkDZXGe3OzarbyEF9rlHGRXJnqrD2cBpHYfE3euLkK6RFU+1jO1zq7l5aAiCcNeCwNaGwc/2+7JmK6Xm4D4flc1cEdi+C+5wNgMGzP9LCt/KVfndDJH0/MAxtxhPWyldMYIdPU/37YaMRfxjClRcmFBkkQN0BWfUW314vLOTGQTOh9xdzo3I0VaCXDBPYE3kR9TeYWCq2hd6RPgzaspyocBG1dEB8JavqoQ5D6A3TSIUXSPiUV3hBNaUiqW0Zp7EwOVLlHyVPxOkQEpGM2V2qFwGNJDVu8HopiYTMn2wvKtpRalmFpxD6h+AHX/rJxH+Izx0btF7ak4/5kin8yMyJRXPGezSFvqjCtconQNFZUyF/Fc3SgLBC1SU4MHgJ2OpGUF0XEiVC6iMFCOTPnqejRBLfL5cogpK2NX9eA8R5cburh+W0ySg8DPqZARhxt92JACy/VKqQLRn8NkaS1/bUOodgRdqkFKYafMeycBnC/NBoTKz1oVwxorbfuWhM5r+y9OT9tidKPNiRmi0WuhcAwBghyTXKj4/N87LHctuEfZo3R+2fAWW/LaWi+aVyChfDCs7GACQrDlYqZa2jArKVMWgFPVjAS1Lh4jgzicAv12tjZyRHpA1+6Xo7WLWDODCx2vRNZSEbzUkieQopzOjub8D+bCBPpAt+XfAvRwY0+hNZiudjbqhYrKhMDAH1j7+dddhKyiQgJHCRfkYeo368+STtL/5Mpn7BsvRvnKhwIpMoOzxvK5QSLe2ITviVRUXpKhMqu+tqJJhoPHg+lqUGE01Mz2XUNRCcLIoZcK4KHdH6Cf1LX0MIr38x03uYQF9y+5d6rf5cYH27LL6YqMlCgIgnao3U1emHCgvk119OF5mthGbqWzUDMtW96RytqdwBCkgbdlBhUruWVRL5YyMX78aty0JBahgu0LZdIUIkd0rMz69hcgIXi/vMzKl0ygK/ylUznLNcujBQba4TorDTZV7GRun0hzllSFVyMovFbUYZUqp20sx+PkNR9YiS7VwkqnXSEqyTOXRD1fcM5rOQKFuDUZU4h44qHOxuZQbVCuAMO+1JRw0fLjD09LyLP3HvRjhf0c1Z7Uw8Q2g5ryuVO5jSLETH3uvFcjfZZtR2hufJnahG4cxvP/twktluovMApNOr+5zmsRg8VdRYHiKYVksy/eeYB/t8+GGH2pAvKW3S6OarfTydYgbFpW+FLHF32TbdP/fp4Z69woQ2j9IcDR1NuLjRnwr78hz/Qttk1JUQLaNwQqOujnhxApcJZxOZppOrkI9AUKfnoFlx5HavmwMcTQInmxImqudyNJloI0rucuIyYNMsHloPjZ9i9Bu0nnI4wYpMAL0nxi8nZ2z4x+YrMLV+inBc/MQSpkT7obgTK3bTGJz5EkxnUYh1pcFtOgoJ0uUil6lI1G5HvxKnYW0UqoOEuSVT0JhgXp2yvI4vEfsSo9fYUz/BmCgqPMaNCKNfDFOwHjN/IXd8iTJbGGs0gq7YUx9L8bsK9dJ6xjoOgvdN6haINtW3cYuNp9qI0SsLS9IITOYwmN64hRjLdJeU+QwTIQADd6R1cNscz2ECFNm+GrnnjkeweA4+440v0MRdhVweqHYHjFzGyCPAPQMFkrFvZ97j5qfAGVsgsoszegtukNfFYxuZVYTso/ZcA4BOhu264d1OKMQDvSyT6KgnUWbjoy8wqK5UvQrpFT9kQwzeDl4juCf4RSgskb6VQBfrHAysDVk40iwRpGbKhanx9e6H/c4xEr8APQXqknjpixEzi3pNF7xJ8byH7Zd8Y2B6klincUgMxp2Yj2FDg7aS9+Vlf89dh5itmcUyMdvk6kavPM6O9yzOd+fI9YGSsmjWbMwQpwHfBDta6mHvUmAwLewH0FZR2cpp9D0jg65zE+IwZpIXmG8iLZHhnQnfAwNDWYkgHmXnD1M4jFuZVW66HQvzFpv1sr3YnPvyvmIo07kBTVBjZmzbKEuOI4WaDqGBRRJQX189ujynF8NtSMYic2nrdrytT5GcGygPDR87WP/mlCcIng4QZ/ccW9qXTbnw1SiPUdgNvhdaN8/YpzomkPIOqGs2WgiNz/rukkErxfKyMue8Rap+1UPwPLqOSltC2XbJmXMX25S4HPIrlEtjsQKMsuWY48bppNuuySU9nq8OJT9BgFrfBefn8irK/Ci/77EXfXgsL/vHMT67V//TEdknQOA4fhjtsu3mNIn5ThNLz/NWbzxv5MIXi8VisVgsFovFYrFYLBbLhPkHupigTkIaYm8AAAAASUVORK5CYII=" alt="Tweet image">
        <div class="card-body">
          <h5 class="card-title">Example Tweet Title</h5>
          <p class="card-text">Example tweet body text goes here.</p>
          <a href="javascript:void()" onclick="deleteCard(${col1})" class="btn btn-danger" role="button">Delete Tweet</a>
        </div>
      </div>`);
    col1++;
    tweet.appendTo('#interest1');
  }

  else if(divID == interest2){
    var tweet = $(`
      <div class="card" id="${col2}">
        <img class="card-img-top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8dofIAm/EAmvEAnfIUn/L4/P/t9/5TsvT0+/4yp/Pm8/3E4vus1/l7wfb6/f/L5vtMr/RkuPWKyPe12/qd0PjZ7fxru/Ufo/Lh8f283/o/q/Pq9f6Xzfim1Pmw2fnQ6fyFxfd3v/ahiQIeAAAJFElEQVR4nO2d67qqIBCGE5hSO5jawSwru/+L3Fprr5YnBGRQn4f3795L/QKGYWaAxcJisVgsFovFYrFYLBaLxWKxWCyWsViun5v0sd0e0udlOfbH6CbYH88+o4R9IJQlYX64jf1Zurjd3UIbOBUAgFFntwnG/rrBLLdhQ90fmcTZnaQeh/Wdqqx3tFPef5E0TEUfdwlXmF8rz/pM+PJ+RJLkIfI4L6cR9idLEeRURN9Ho7/ve5wXMyAbEx8uysFhgvre0IjbAVcxYw4kpj5eAM8V6qB/25F1d9XL6/00due98p5rV8Fh02Nf2pvx3PEw99PdAbhTi0MPGFLayYRHYAXmN3vq+uj/7w0s473zyBz6xBJUJyIq+spWYlWDc7tfv7NNTxMmUPz5GlXXL66UialKpN+5cX0vfIU//0a2vJce3v818dDVFZPEVamH/oe+7c0qzX1a/aHgyn3t9fOffANeYDhIYCHxeHj5jEH9MfTCe+vpZ2BAOHmBhUFptcN8M7OI//8Nw3Z7zupjkEtPHy3tjBmJmaoV7RMIfJf7RL//F1XihnZ/5CD6Zrrsb9dBlBg0zIMugdyJYlEf/czFUhhhCTz2vDiovRhLIlYfJXHtRcv6oDzVhz9cUYIBDk4T0prAS96Y8x4NCw4tLu5gYpyJotpFg4NLaMM1y5u/LThcD0GFG04frSyJNi9gf13X/7QaAKY7IPDC6KOQ/EbivPQM5TqK7Zrvvrb/ONwFszQrjLmeRj+O9DNzf5y5Vuem48clHUtqNRBGIThFDw0uaRyy35Bru3PTNUDYVaO9QZjs/ft9FzrVgCtti8l5nSagvqQewAHDkDZXGe3OzarbyEF9rlHGRXJnqrD2cBpHYfE3euLkK6RFU+1jO1zq7l5aAiCcNeCwNaGwc/2+7JmK6Xm4D4flc1cEdi+C+5wNgMGzP9LCt/KVfndDJH0/MAxtxhPWyldMYIdPU/37YaMRfxjClRcmFBkkQN0BWfUW314vLOTGQTOh9xdzo3I0VaCXDBPYE3kR9TeYWCq2hd6RPgzaspyocBG1dEB8JavqoQ5D6A3TSIUXSPiUV3hBNaUiqW0Zp7EwOVLlHyVPxOkQEpGM2V2qFwGNJDVu8HopiYTMn2wvKtpRalmFpxD6h+AHX/rJxH+Izx0btF7ak4/5kin8yMyJRXPGezSFvqjCtconQNFZUyF/Fc3SgLBC1SU4MHgJ2OpGUF0XEiVC6iMFCOTPnqejRBLfL5cogpK2NX9eA8R5cburh+W0ySg8DPqZARhxt92JACy/VKqQLRn8NkaS1/bUOodgRdqkFKYafMeycBnC/NBoTKz1oVwxorbfuWhM5r+y9OT9tidKPNiRmi0WuhcAwBghyTXKj4/N87LHctuEfZo3R+2fAWW/LaWi+aVyChfDCs7GACQrDlYqZa2jArKVMWgFPVjAS1Lh4jgzicAv12tjZyRHpA1+6Xo7WLWDODCx2vRNZSEbzUkieQopzOjub8D+bCBPpAt+XfAvRwY0+hNZiudjbqhYrKhMDAH1j7+dddhKyiQgJHCRfkYeo368+STtL/5Mpn7BsvRvnKhwIpMoOzxvK5QSLe2ITviVRUXpKhMqu+tqJJhoPHg+lqUGE01Mz2XUNRCcLIoZcK4KHdH6Cf1LX0MIr38x03uYQF9y+5d6rf5cYH27LL6YqMlCgIgnao3U1emHCgvk119OF5mthGbqWzUDMtW96RytqdwBCkgbdlBhUruWVRL5YyMX78aty0JBahgu0LZdIUIkd0rMz69hcgIXi/vMzKl0ygK/ylUznLNcujBQba4TorDTZV7GRun0hzllSFVyMovFbUYZUqp20sx+PkNR9YiS7VwkqnXSEqyTOXRD1fcM5rOQKFuDUZU4h44qHOxuZQbVCuAMO+1JRw0fLjD09LyLP3HvRjhf0c1Z7Uw8Q2g5ryuVO5jSLETH3uvFcjfZZtR2hufJnahG4cxvP/twktluovMApNOr+5zmsRg8VdRYHiKYVksy/eeYB/t8+GGH2pAvKW3S6OarfTydYgbFpW+FLHF32TbdP/fp4Z69woQ2j9IcDR1NuLjRnwr78hz/Qttk1JUQLaNwQqOujnhxApcJZxOZppOrkI9AUKfnoFlx5HavmwMcTQInmxImqudyNJloI0rucuIyYNMsHloPjZ9i9Bu0nnI4wYpMAL0nxi8nZ2z4x+YrMLV+inBc/MQSpkT7obgTK3bTGJz5EkxnUYh1pcFtOgoJ0uUil6lI1G5HvxKnYW0UqoOEuSVT0JhgXp2yvI4vEfsSo9fYUz/BmCgqPMaNCKNfDFOwHjN/IXd8iTJbGGs0gq7YUx9L8bsK9dJ6xjoOgvdN6haINtW3cYuNp9qI0SsLS9IITOYwmN64hRjLdJeU+QwTIQADd6R1cNscz2ECFNm+GrnnjkeweA4+440v0MRdhVweqHYHjFzGyCPAPQMFkrFvZ97j5qfAGVsgsoszegtukNfFYxuZVYTso/ZcA4BOhu264d1OKMQDvSyT6KgnUWbjoy8wqK5UvQrpFT9kQwzeDl4juCf4RSgskb6VQBfrHAysDVk40iwRpGbKhanx9e6H/c4xEr8APQXqknjpixEzi3pNF7xJ8byH7Zd8Y2B6klincUgMxp2Yj2FDg7aS9+Vlf89dh5itmcUyMdvk6kavPM6O9yzOd+fI9YGSsmjWbMwQpwHfBDta6mHvUmAwLewH0FZR2cpp9D0jg65zE+IwZpIXmG8iLZHhnQnfAwNDWYkgHmXnD1M4jFuZVW66HQvzFpv1sr3YnPvyvmIo07kBTVBjZmzbKEuOI4WaDqGBRRJQX189ujynF8NtSMYic2nrdrytT5GcGygPDR87WP/mlCcIng4QZ/ccW9qXTbnw1SiPUdgNvhdaN8/YpzomkPIOqGs2WgiNz/rukkErxfKyMue8Rap+1UPwPLqOSltC2XbJmXMX25S4HPIrlEtjsQKMsuWY48bppNuuySU9nq8OJT9BgFrfBefn8irK/Ci/77EXfXgsL/vHMT67V//TEdknQOA4fhjtsu3mNIn5ThNLz/NWbzxv5MIXi8VisVgsFovFYrFYLBbLhPkHupigTkIaYm8AAAAASUVORK5CYII=" alt="Tweet image">
        <div class="card-body">
          <h5 class="card-title">Example Tweet Title</h5>
          <p class="card-text">Example tweet body text goes here.</p>
          <a href="javascript:void()" onclick="deleteCard(${col2})" class="btn btn-danger" role="button">Delete Tweet</a>
        </div>
      </div>`);
    col2++;
    tweet.appendTo('#interest2');
  }

  else if(divID == interest3){
    var tweet = $(`
      <div class="card" id="${col3}">
        <img class="card-img-top" src="data:image/png;base64,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" alt="Tweet image">
        <div class="card-body">
          <h5 class="card-title">Example Tweet Title</h5>
          <p class="card-text">Example tweet body text goes here.</p>
          <a href="javascript:void()" onclick="deleteCard(${col3})" class="btn btn-danger" role="button">Delete Tweet</a>
        </div>
      </div>`);
    col3++;
    tweet.appendTo('#interest3');
  }
}

function deleteCard(divID){
  //column one
  if(divID < 199){
    document.getElementById(divID).remove();
    col1--;
  }
  //column two
  else if(divID < 299){
    document.getElementById(divID).remove();
    col2--;
  }
  //column three
  else if(divID < 399){
    document.getElementById(divID).remove();
    col3--;
  }
}
