import { getRepoOpenrank, getRepoActivity, getUserOpenrank, getUserActivity, getAttention, getRepoCommunityOpenrank } from './indices';
import {
  chaossCodeChangeCommits, chaossBusFactor, chaossIssuesNew, chaossIssuesClosed, chaossChangeRequestsAccepted,
  chaossChangeRequestsDeclined, chaossIssueResolutionDuration, chaossCodeChangeLines, chaossTechnicalFork,
  chaossChangeRequests, chaossChangeRequestReviews, chaossNewContributors, chaossChangeRequestsDuration, chaossIssueResponseTime, chaossChangeRequestsAcceptanceRatio, chaossIssuesAndChangeRequestActive, chaossActiveDatesAndTimes, chaossChangeRequestResolutionDuration, chaossChangeRequestResponseTime, chaossIssueAge, chaossChangeRequestAge, chaossInactiveContributors, chaossContributors,
} from './chaoss';
import { repoStars, repoIssueComments, repoParticipants, userEquivalentTimeZone, contributorEmailSuffixes } from './metrics';
import sbom from './sbom';

module.exports = {
  // index
  getRepoActivity: getRepoActivity,
  getRepoOpenrank: getRepoOpenrank,
  getRepoCommunityOpenrank: getRepoCommunityOpenrank,
  getUserActivity: getUserActivity,
  getUserOpenrank: getUserOpenrank,
  getAttention: getAttention,
  // chaoss metrics
  chaossCodeChangeCommits: chaossCodeChangeCommits,
  chaossIssuesNew: chaossIssuesNew,
  chaossIssuesAndChangeRequestActive: chaossIssuesAndChangeRequestActive,
  chaossIssuesClosed: chaossIssuesClosed,
  chaossBusFactor: chaossBusFactor,
  chaossChangeRequestsAccepted: chaossChangeRequestsAccepted,
  chaossChangeRequestsDeclined: chaossChangeRequestsDeclined,
  chaossIssueResolutionDuration: chaossIssueResolutionDuration,
  chaossChangeRequestResolutionDuration: chaossChangeRequestResolutionDuration,
  chaossIssueResponseTime: chaossIssueResponseTime,
  chaossChangeRequestResponseTime: chaossChangeRequestResponseTime,
  chaossIssueAge: chaossIssueAge,
  chaossChangeRequestAge: chaossChangeRequestAge,
  chaossCodeChangeLines: chaossCodeChangeLines,
  chaossTechnicalFork: chaossTechnicalFork,
  chaossChangeRequests: chaossChangeRequests,
  chaossChangeRequestReviews: chaossChangeRequestReviews,
  chaossNewContributors: chaossNewContributors,
  chaossChangeRequestsDuration: chaossChangeRequestsDuration,
  chaossChangeRequestsAcceptanceRatio: chaossChangeRequestsAcceptanceRatio,
  chaossRepoActiveDatesAndTimes: config => chaossActiveDatesAndTimes(config, 'repo'),
  chaossUserActiveDatesAndTimes: config => chaossActiveDatesAndTimes(config, 'user'),
  chaossContributors: chaossContributors,
  chaossInactiveContributors: chaossInactiveContributors,
  // x-lab metrics
  repoStars: repoStars,
  repoIssueComments: repoIssueComments,
  repoParticipants: repoParticipants,
  userEquivalentTimeZone: userEquivalentTimeZone,
  contributorEmailSuffixes: contributorEmailSuffixes,
  // SBOM metrics
  repoDependencies: sbom.repoDependencies.bind(sbom),
  repoDependenciesByPackageManager: sbom.repoDependenciesByPackageManager.bind(sbom),
  commonDependencies: sbom.commonDependencies.bind(sbom),
  packageDependents: sbom.packageDependents.bind(sbom),
  dependencyGraph: sbom.dependencyGraph.bind(sbom)
};
