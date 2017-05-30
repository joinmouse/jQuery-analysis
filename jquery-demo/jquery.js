//定义的windows.jQuery是一个函数
window.jQuery = function(selectorOrArr){
  var array =[]
//改造jquery,既可以数组也可以选择元素 
  if(typeof selectorOrArr === 'string'){
    //elements is not an array,is like an array
    var elements = document.querySelectorAll(selectorOrArr)
    for(var i=0;i<elements.length;i++){
      array.push(elements[i])
    }
  }else if(selectorOrArr.length !== undefined){
     for(var i=0;i<selectorOrArr.length;i++){
      array.push(selectorOrArr[i])
    }
  }
  

  //给返回的数组添加属性（ps:数组也是对象）
  array.on = function(eventType,fn){
    for(var i=0;i<array.length;i++){
      array[i].addEventListener('click',fn)
    }
    return array
  }
  array.addClass = function(className){
     for(var i=0;i<array.length;i++){
       array[i].classList.add(className)
     }
     return array
  }
  array.removeClass = function(className){
    for(var i=0;i<array.length;i++){
       array[i].classList.remove(className)
     }
     return array
  }
  array.toggleClass = function(className){
    for(var i=0;i<array.length;i++){
       array[i].classList.toggle(className)
     }
     return array
  }


  array.text = function(value){
  //当text的内容为空的时候，获取array各元素内的textContent
    if(value === undefined){
      var result = []
      for(var i=0;i<array.length;i++){
        result.push(array[i].textContent)
      }
    }else {
  //修改text内容，可直接将value替换array各元素的文本内容中
      for(var i=0;i<array.length;i++){
        array[i].textContent = value
      }
      return array
    }
  }
//实现基本原理与text类似
  array.html = function(htmlString){
    if(htmlString === undefined){
      var result = []
      for(var i=0;i<array.length;i++){
        result.push(array[i].innerHTML)
      }
    }else {
      for(var i=0;i<array.length;i++){
        array[i].innerHTML = htmlString
      }
      return array
    }
  }
  array.find = function(selector){
    var array2 = []
    for(var i=0;i<array.length;i++){
      var elements = array[i].querySelectorAll(selector)
      for(var j=0;j<selector.length;i++){
        array2.push(elements[j])
      }
    }
    //递归调用，将array2数组作为参数传递，使得其返回的arrayAPI拥有array的各种属性
    var arrayAPI = jQuery(array2)
    return arrayAPI
  }

  return array
}

window.$ = window.jQuery


//闭包：一个内部函数访问它外面的变量