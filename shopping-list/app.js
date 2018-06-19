var state = {
  items: []
};
var listItemTemplate = (
  '<li>' +
    '<span class="shopping-item js-shopping-item"></span>' +
    '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>'
);
var addItemUtil = function(state, item){
  state.items.push({
    displayName: item,
    checkOff : false
  });
}

var deleteItemUtil = function(state, index) {
  state.items.splice(index, 1);
}

var getItem = function(state, itemIndex) {
  return state.items[itemIndex];
}

var updateItem = function(state, itemIndex, newItemState){
  state.items[itemIndex] = newItemState;
}

var renderItem = function(item,index,listItemTemplate,itemAttr){
  var ele = $(listItemTemplate);
  ele.find('.js-shopping-item').text(item.displayName);
  if(item.checkOff){
    ele.find('.js-shopping-item').addClass('shopping-item__checked');
  }
  ele.find('.js-shopping-item-toggle')
  ele.attr(itemAttr, index);
  return ele;
}

var renderList= function(state, list, itemAttr){
      var itemHTML = state.items.map(
        function(item,index){
          return renderItem(item,index,listItemTemplate,itemAttr);
        });
        list.html(itemHTML);
}
var addItem = function(form,newItem, itemAttr, shoppingList, state){
  form.submit(function(event){
    event.preventDefault();
    var newItm = form.find(newItem).val();
    addItemUtil(state,newItm);
    renderList(state,shoppingList,itemAttr);
    this.reset();
    // console.log("yep");
  });
}

var removeItem = function(form,delItem, itemAttr, shoppingList, state){

  shoppingList.on('click',delItem, function(event){
    var itemIndex = parseInt($(this).closest('li').attr(itemAttr));
    deleteItemUtil(state, itemIndex);
    renderList(state,shoppingList,itemAttr);
    // console.log("check 123 yo");
  });
}
var toogleHandle = function( shoppingList, toggleItem, itemAttr, state){
  shoppingList.on('click', toggleItem, function(event) {
    var itemId = $(event.currentTarget.closest('li')).attr(itemAttr);
    var oldItem = getItem(state, itemId);

    updateItem(state, itemId, {
      displayName: oldItem.displayName,
      checkOff: !oldItem.checkOff
    });
    renderList(state, shoppingList, itemAttr);
    // console.log('123');
  });
}

$(function(){
  var form = $('#js-shopping-list-form');
  var shoppingList = $('.js-shopping-list');
  var newItem = '#js-new-item';
  var delItem = '.js-shopping-item-delete';
  var toggleItem = '.js-shopping-item-toggle';
  var itemAttr = 'data-list-item-id';
  addItem(form,newItem, itemAttr, shoppingList, state);
  removeItem(form,delItem, itemAttr, shoppingList, state);
  toogleHandle(shoppingList, toggleItem, itemAttr, state);
});
