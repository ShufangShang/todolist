
/* let addItemFunction = function () {

    console.log("Add item button clicked");

}


document.getElementById("add-item-btn").
addEventListener
("click", addItemFunction);
 */

<script>  
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    }

    // Click on a close (x) button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
    }

    // Add a "checked" mark when clicking on a list item
    var list = document.querySelector('ul');
    //console.log(list);
    list.addEventListener('click', function(ev) {
    // Here I have to use the "LI" not "li" to make it work
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    }, false);

    //This function will create a new item and add to the to-do list
    //when the "Add" button is clicked
    let addFunc = function (event) {
        
        if(typeof document !== "undefined")
        {
            //alert('Add button is clicked');

            let x = document.getElementById("newItem");
            let defaultVal = x.defaultValue;
            //alert( defaultVal);
            let currentVal = x.value;
            //alert( currentVal);
            
            let newLI = document.createElement('li');
            //newLI.innerHTML = currentVal;
            var txt = document.createTextNode(currentVal);
            newLI.appendChild(txt);
            
            //alert(newLI.innerHTML);
            
            if (currentVal=== '') {
                alert("Please enter a task!");
            } 
            else 
            {
                document.getElementById("tasksUL").appendChild(newLI);
            }
            document.getElementById("newItem").value = "";

            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            newLI.appendChild(span);

            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                //alter('onclick called');
                var div = this.parentElement;
                div.style.display = "none";
                }
            }
        }
        else
        {
            alert('document type is undefinded!');
        }
        
    }
        
    document.getElementById("add-item-btn").addEventListener("click", addFunc);
</script>

