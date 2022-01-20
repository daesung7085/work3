// let pop_arr = [];
//////////////////// 공통함수들
let createCommon = {
	init : function(){
		this.openlayerpop();
		this.step();
		this.input();
	},
	openlayerpop : function(){
		const _this = createCommon;
		$(".open-lp").on("click", function() {
			$('html, body').addClass('pop-open');
			let _id = $(this).attr("aria-controls");
			let __id = $(this).attr('id');
			$("#"+_id).show().addClass('on');
			$('.dim').show();
			// pop_arr.push(_id);
			_this.close(_id);

			if($(this).hasClass('is-select')){
				_this.confirm(_id, __id);
			}

		});
	},
	close : function($id){
		$('#'+$id +' .pop-close, '+'#'+$id +' .btn-cancel').on("click", function() {
			$('html, body').removeClass('pop-open');
			$('#'+$id).hide().removeClass('on');
		});
	}
}

////////////////// pop Layer
