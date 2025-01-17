function skilsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/member/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'member',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}