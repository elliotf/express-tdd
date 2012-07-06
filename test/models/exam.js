var Exam = require('models/exam');
require('test_helpers');

describe("Models", function() {
  describe("Exam", function() {
    describe("attributes", function() {
      var exam;

      beforeEach(function(done) {
        exam = new Exam({
          title: 'A title'
        });

        exam.save(function(err){
          if (err) throw err;
          done();
        });
      });

      it("should have basic attributes", function(done) {
        exam = Exam.find({title: 'A title'},function(err, docs){
          if (err) throw err;
          docs.length.should.equal(1);
          docs[0].title.should.equal('A title');
          done();
        });
      });
    });
  });
});
