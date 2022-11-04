import {
    DateTime,
    DateTimeFormatOptions,
} from 'luxon';
import { Reading } from '../types/Reading';

const DATETIME_OPTIONS_ASSIGNMENT = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
} as DateTimeFormatOptions;

type link = string | null;
type assignmentDate = string | null;

export class CourseInformationStore {
    //
    // Home
    //

    // Link to course Canvas, no trailing slash
    linkCanvas: link = 'https://canvas.uw.edu/courses/1597428';

    // Link to course GitHub
    linkGitHub: link = 'https://github.com/uwcse510/web-cse510-22au';

    // Link to university syllabus policies and guidelines
    linkUniversitySyllabusGuidelines: link = 'https://registrar.washington.edu/staffandfaculty/syllabus-guidelines';

    // Link regarding accessible presentations
    linkAccessiblePresentations: link = 'https://interactions.acm.org/archive/view/july-august-2017/making-your-presentation-accessible'

    //
    // Readings
    //

    // Link to the Canvas discussion forum
    linkDiscussion: link = this.linkCanvas + '/discussion_topics';

    // Links for the Visions of HCI discussion
    linkVisionsOrganization: link = 'https://docs.google.com/document/d/1TGZYijrQ_bcQOD4PSaq1eqUxxYIFtf_jDLtRnz38-kc/edit?usp=sharing';
    linkVisionsSlides: link = 'https://docs.google.com/presentation/d/18iMZSPbBbLw-xrlBXLpxqpfUX4QCncq5VdgO6hKgl4c/edit?usp=sharing';

    //
    // Project
    //

    assignmentDateProjectInClassProposalFinalization: assignmentDate =
        DateTime.fromISO('2022-10-13').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectProposal: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-10-14').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectMilestone1: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-11-07').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' for in-class presentations ' + DateTime.fromISO('2022-11-08').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' and ' + DateTime.fromISO('2022-11-10').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectMilestone2: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-11-28').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' for in-class presentations ' + DateTime.fromISO('2022-11-29').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT) +
        ' and ' + DateTime.fromISO('2022-12-01').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueProjectReport: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-12-14').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    // Link to a Canvas thread of potential project proposal ideas
    linkProjectProposalIdeas: link = 'https://canvas.uw.edu/courses/1597428/discussion_topics/7511474';
    // Link to a Canvas folder of prior project proposals
    linkProjectProposalSamples: link = 'https://canvas.uw.edu/courses/1597428/files/folder/project%20samples';
    // Link to the current CHI format to use for report submission
    linkProjectCHIFormat: link = 'https://chi2022.acm.org/for-authors/presenting/papers/chi-publication-formats/';

    // Link to shared document for project proposals
    linkProjectProposalGoogleDoc: link = "https://docs.google.com/document/d/1XKeAK5qEuPpyly8LOstXaNk3SBWzGRjoKBH3ttYeDao/edit#";

    // Links to submit project components
    linkSubmitProjectProposal: link = 'https://canvas.uw.edu/courses/1597428/assignments/7762001';
    linkSubmitProjectMilestone1: link = 'https://canvas.uw.edu/courses/1597428/assignments/7784896';
    linkSignupProjectMilestone1PresentationSignup: link = 'https://docs.google.com/document/d/1kfsWp4uVbeMXaICiyCpOAdvLGrcSYYkz1lp3Xd0_xm8/edit?usp=share_link';
    linkSubmitProjectMilestone2: link = 'https://canvas.uw.edu/courses/1597428/assignments/7798007';
    linkSignupProjectMilestone2PresentationSignup: link = 'https://docs.google.com/document/d/1eO3umlJ-ihF8ZCvDl29kV_Es5WhSVCaoi3ZAZxzY5h8/edit?usp=share_link';
    linkSubmitProjectReport: link = 'https://canvas.uw.edu/courses/1597428/assignments/7798008';

    // Reading on paper writing
    readingWobbrockPaperWriting: Reading = {
        authorText: 'Jacob O. Wobbrock',
        title: 'Catchy Titles are Good: But Avoid Being Cute',
        publicationText: '2015',
        link: 'https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf'
    };

    //
    // Statistics Lab
    //

    assignmentDateAvailableStatisticsLab: assignmentDate =
        'by 11:59pm ' + DateTime.fromISO('2022-11-03').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueStatisticsLab: assignmentDate =
        '11:59pm ' + DateTime.fromISO('2022-11-23').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    linkStatisticsLab: link = 'https://canvas.uw.edu/files/97349140/download?download_frd=1';
    linkSubmitStatisticsLab: link = 'https://canvas.uw.edu/courses/1597428/assignments/7798011';

    //
    // Exam
    //

    assignmentDateAvailableExam: link =
        'by 11:59pm ' + DateTime.fromISO('2022-12-09').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueExam: link =
        '11:59pm ' + DateTime.fromISO('2022-12-12').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    linkSubmitExam: link = 'https://canvas.uw.edu/courses/1597428/assignments/7798014';
}
