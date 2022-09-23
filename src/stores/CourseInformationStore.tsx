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
    linkProjectProposalIdeas: link = null; // TODO link = "https://canvas.uw.edu/courses/1519807/discussion_topics/6939656";
    // Link to a Canvas folder of prior project proposals
    linkProjectProposalSamples: link = null; // TODO link = "https://canvas.uw.edu/courses/1519807/files/folder/project%20samples";
    // Link to the current CHI format to use for report submission
    linkProjectCHIFormat: link = "https://chi2022.acm.org/for-authors/presenting/papers/chi-publication-formats/";

    // Link to shared document for project proposals
    linkProjectProposalGoogleDoc: link = null; // TODO link = "https://docs.google.com/document/d/1OB4rPy4x7OAfy1HT2tnXLqplIEsZQ2Odx_DZPlME0Tk/edit?usp=sharing";

    // Links to submit project components
    linkSubmitProjectProposal: link = null; // TODO link = "https://canvas.uw.edu/courses/1519807/assignments/7075561";
    linkSubmitProjectMilestone1Document: link = null; // TODO link = "https://canvas.uw.edu/courses/1519807/assignments/7099160";
    linkSubmitProjectMilestone1Slides: link = null; // TODO link = "https://canvas.uw.edu/courses/1519807/assignments/7103427";
    linkSignupProjectMilestone1Presentation: link = null; // TODO link = "https://docs.google.com/document/d/1QK6ZglvPnWBGY5pCbLLHOEhxt19sx2CF-TTGXxn_v3c/edit?usp=sharing";
    linkSubmitProjectMilestone2: link = null; // TODO link = "https://canvas.uw.edu/courses/1519807/assignments/7099249";
    linkSignupProjectMilestone2Presentation: link = null; // TODO link = "https://docs.google.com/document/d/1LPryCVy4vjscDFb6WM6yJUX0kHjOm9TkvsPQ8Q3917s/edit?usp=sharing";
    linkSubmitProjectReport: link = null; // TODO link = "https://canvas.uw.edu/courses/1519807/assignments/7170960";

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

    linkStatisticsLab: link = null; // TODO link = 'https://canvas.uw.edu/files/88095585/download?download_frd=1';
    linkSubmitStatisticsLab: link = null; // TODO link = 'https://canvas.uw.edu/courses/1519807/assignments/7128609';

    //
    // Exam
    //

    assignmentDateAvailableExam: link =
        'by 11:59pm ' + DateTime.fromISO('2022-12-09').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);
    assignmentDateDueExam: link =
        '11:59pm ' + DateTime.fromISO('2022-12-12').toLocaleString(DATETIME_OPTIONS_ASSIGNMENT);

    linkSubmitExam: link = null; // TODO link = "https://canvas.uw.edu/courses/1519807/assignments/7170957"
}
