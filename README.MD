jQueryClassFilter
====

jQuery class filter is a tiny (181 bytes) jQuery plugin that exposes a filter option for classes.  
It's essentially Array.protoype.filter for classes.  
All classes on the selected DOM element are passed to the supplied filter function.  

**Example**:  
Given the following div container:  
    ```<div id="myDiv" class="button buttonRed otherClass"></div>```
 
Calling the plugin like this:  
    ```$('#myDiv').filterClasses(name => name.startsWith('button'));```

Will results in:  
    ```<div id="myDiv" class="button buttonRed"></div>```
