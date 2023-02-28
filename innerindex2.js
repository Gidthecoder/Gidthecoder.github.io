let s = document.querySelector('select.ss');
                        s.onchange = function(e){
                            let a = document.querySelector('a.special');
                            if(e.target.value === "morecontent"){return;}
                            a.href = e.target.value
                            a.click()
                        }