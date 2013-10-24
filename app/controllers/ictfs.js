var Ictfs = function () {
  this.respondsWith = ['html'];

  this.index = function (req, resp, params) {
    this.respond({params: params},{
    	template: 'app/views/ictfs/index',
    });
  };

  this.week = function (req, resp, params) {
  	week_id = Number(params.id);
  	if (!week_id || week_id < 1 || week_id > 7){
  		this.redirect('/ictf');
  	}
    this.respond({params: params},{
      template: 'app/views/ictfs/week' + week_id,
    });
  }

};

exports.Ictfs = Ictfs;

