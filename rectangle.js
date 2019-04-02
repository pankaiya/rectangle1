/* global Rectangle,validate,isLegalKey: true */
$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      isPassValidate = false;

  //字符检验
  $width.keypress(function(e) {
    if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
      e.preventDefault();
    }
  });
  $height.keypress(function(e) {
    if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
      e.preventDefault();
    }
  });
  //字段检验
  $height.focusout(function(){
    var result = validate($height.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $heightValidate.html('高度' + result.reason);
      $height.select();
    } else {
      $heightValidate.html('');
    }
  });

  $width.focusout(function(){
    var result = validate($width.val());
    isPassValidate = result.isOK;
    if(!result.isOK) {
      $widthValidate.html('宽度' + result.reason);
      $width.select();
    } else {
      $widthValidate.html('');
    }
  });

  $btnCal.click(function(){
    if(!isPassValidate) return;

    var w = $width.val(),
        h = $height.val();

    var r = new Rectangle(w,h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());              
  }); 

});
