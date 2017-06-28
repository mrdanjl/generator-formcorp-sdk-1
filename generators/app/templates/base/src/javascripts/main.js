/* global fc $ */
function renderToolTips() {
  /* Help Modals -> Tool Tips */
  fc.domContainer.off('click', '.fc-help-link');
  fc.domContainer.on('click', '.fc-help-link', () => false); // prevent following href

  // generate tooltip tag
  if ($('.fc-help-tooltip').length === 0) {
    $('body').append('<p class="fc-help-tooltip"></p>');
  }

  $('.fc-help-link').hover(
    (event) => {
    const tooltipEle = $('.fc-help-tooltip');
  const dataIndex = $(event.currentTarget).attr('data-for');
  if (fc.helpData && fc.helpData[dataIndex]) {
    tooltipEle.html(fc.helpData[dataIndex]);
    tooltipEle.show();
    tooltipEle.css({ top: event.originalEvent.pageY, left: event.originalEvent.pageX });
  }
},
  () => {
    $('.fc-help-tooltip').fadeOut(400, () => {
      $(this).hide();
  });
  },
);

  $('.fc-help-tooltip').hover(
    () => {
    $('.fc-help-tooltip').stop(true).fadeIn();
},
  () => {
    $('.fc-help-tooltip').fadeOut(400, () => {
      $(this).hide();
  });
  },
);

  $('.repos-help').each((i, e) => {
    const $e = $(e);
  const helpLink = $e.find('.fc-help-link').detach();
  $e.find('label:eq(1)').append(helpLink[0]);
  $e.removeClass('repos-help');
});
}


//  add the javascript code here
function changeContentRadio() {
  //  when content radio button is selected
  $('.fc-content-content .fc-button').on('click', function () {
    // $('.fc-content-content .fc-button:checked').parent.css('background-color', 'black');
    // $(this).parent().addClass('checked-radio');
    // console.log($(this).prop('outerHTML'));
    // $(this).parent().addClass('selected');
    $('.fc-content-content button:not(:checked)').parents('.fc-content-radio-item').removeClass('checked-radio-back');
    $('.fc-content-content button:not(:checked)').parents('.fc-content-radio-item').find('.fc-content-title').removeClass('checked-radio-title');

    $(this).closest('.fc-content-radio-item').find('.fc-content-title').addClass('checked-radio-title');
    $(this).closest('.fc-content-radio-item').addClass('checked-radio-back');
  });
}

// make the border rounded
function fixTableLastRadius() {
  $('tbody tr:visible').last().find('th').css('border-radius', '0 0 18px 18px');
}


function fcFormSetup() {
  renderToolTips();
  changeContentRadio();
  fixTableLastRadius();
}

function fcMain() {
  if (typeof fc !== 'undefined') {
    /* Start main code */
    fc.domContainer.on(fc.jsEvents.onPageRender, (event, pageId) => { // eslint-disable-line
      fcFormSetup();
  });
    /* End main code */
  } else {
    setTimeout(fcMain, 250);
  }
}

$(() => {
  fcMain();
});
