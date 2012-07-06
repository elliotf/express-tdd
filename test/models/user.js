var User = require('models/user');
require('test_helpers');

describe("Models", function() {
  describe("User", function() {
    describe("attributes", function() {
      var user;

      beforeEach(function(done) {
        user = new User({
          firstName: 'bob'
        });

        user.save(function(err){
          if (err) throw err;
          done();
        });
      });

      it("should have basic attributes", function(done) {
        User.find({firstName: 'bob'}, function(err, docs){
          if (err) throw err;
          docs.length.should.equal(1);
          docs[0].firstName.should.equal('bob');
          done();
        });
      });
    });
  });
});
