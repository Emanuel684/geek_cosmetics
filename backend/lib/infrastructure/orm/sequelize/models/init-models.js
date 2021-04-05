var DataTypes = require("sequelize").DataTypes;
var _adm_course_cohort = require("./AdmCourseCohort");
var _adm_course_partners = require("./AdmCoursePartners");
var _adm_courses = require("./AdmCourses");
var _adm_courses_requeriments = require("./AdmCoursesRequeriments");
var _adm_detailed_requeriment = require("./AdmDetailedRequeriment");
var _adm_partners = require("./AdmPartners");
var _adm_prospect_stages = require("./AdmProspectStages");
var _adm_prospects_preference = require("./AdmProspectsPreference");
var _adm_requeriment_fullfiment = require("./AdmRequerimentFullfiment");
var _adm_student_cohort = require("./AdmStudentCohort");
var _auth_assignment_permissions = require("./AuthAssignmentPermissions");
var _auth_permissions = require("./AuthPermissions");
var _auth_permissions_section = require("./AuthPermissionsSection");
var _auth_roles = require("./AuthRoles");
var _auth_sections = require("./AuthSections");
var _auth_session = require("./AuthSession");
var _auth_user_roles = require("./AuthUserRoles");
var _auth_user_status = require("./AuthUserStatus");
var _auth_users = require("./AuthUsers");
var _cv_academic_info = require("./CvAcademicInfo");
var _cv_languages_info = require("./CvLanguagesInfo");
var _cv_personal_info = require("./CvPersonalInfo");
var _cv_work_info = require("./CvWorkInfo");
var _main_city = require("./MainCity");
var _main_country = require("./MainCountry");
var _main_files_manager = require("./MainFilesManager");
var _main_interview_schedule = require("./MainInterviewSchedule");
var _main_languages = require("./MainLanguages");
var _main_stage = require("./MainStage");
var _main_state = require("./MainState");
var _tt_answers = require("./TtAnswers");
var _tt_bancks_questions = require("./TtBancksQuestions");
var _tt_difficulties_questions = require("./TtDifficultiesQuestions");
var _tt_difficulties_tests = require("./TtDifficultiesTests");
var _tt_options = require("./TtOptions");
var _tt_tests = require("./TtTests");
var _tt_tests_students = require("./TtTestsStudents");
var _tt_topics = require("./TtTopics");

function initModels(sequelize) {
  var adm_course_cohort = _adm_course_cohort(sequelize, DataTypes);
  var adm_course_partners = _adm_course_partners(sequelize, DataTypes);
  var adm_courses = _adm_courses(sequelize, DataTypes);
  var adm_courses_requeriments = _adm_courses_requeriments(sequelize, DataTypes);
  var adm_detailed_requeriment = _adm_detailed_requeriment(sequelize, DataTypes);
  var adm_partners = _adm_partners(sequelize, DataTypes);
  var adm_prospect_stages = _adm_prospect_stages(sequelize, DataTypes);
  var adm_prospects_preference = _adm_prospects_preference(sequelize, DataTypes);
  var adm_requeriment_fullfiment = _adm_requeriment_fullfiment(sequelize, DataTypes);
  var adm_student_cohort = _adm_student_cohort(sequelize, DataTypes);
  var auth_assignment_permissions = _auth_assignment_permissions(sequelize, DataTypes);
  var auth_permissions = _auth_permissions(sequelize, DataTypes);
  var auth_permissions_section = _auth_permissions_section(sequelize, DataTypes);
  var auth_roles = _auth_roles(sequelize, DataTypes);
  var auth_sections = _auth_sections(sequelize, DataTypes);
  var auth_session = _auth_session(sequelize, DataTypes);
  var auth_user_roles = _auth_user_roles(sequelize, DataTypes);
  var auth_user_status = _auth_user_status(sequelize, DataTypes);
  var auth_users = _auth_users(sequelize, DataTypes);
  var cv_academic_info = _cv_academic_info(sequelize, DataTypes);
  var cv_languages_info = _cv_languages_info(sequelize, DataTypes);
  var cv_personal_info = _cv_personal_info(sequelize, DataTypes);
  var cv_work_info = _cv_work_info(sequelize, DataTypes);
  var main_city = _main_city(sequelize, DataTypes);
  var main_country = _main_country(sequelize, DataTypes);
  var main_files_manager = _main_files_manager(sequelize, DataTypes);
  var main_interview_schedule = _main_interview_schedule(sequelize, DataTypes);
  var main_languages = _main_languages(sequelize, DataTypes);
  var main_stage = _main_stage(sequelize, DataTypes);
  var main_state = _main_state(sequelize, DataTypes);
  var tt_answers = _tt_answers(sequelize, DataTypes);
  var tt_bancks_questions = _tt_bancks_questions(sequelize, DataTypes);
  var tt_difficulties_questions = _tt_difficulties_questions(sequelize, DataTypes);
  var tt_difficulties_tests = _tt_difficulties_tests(sequelize, DataTypes);
  var tt_options = _tt_options(sequelize, DataTypes);
  var tt_tests = _tt_tests(sequelize, DataTypes);
  var tt_tests_students = _tt_tests_students(sequelize, DataTypes);
  var tt_topics = _tt_topics(sequelize, DataTypes);

  adm_course_partners.belongsTo(adm_course_cohort, { as: "id_course_user_cohort_adm_course_cohort", foreignKey: "id_course_user_cohort"});
  adm_course_cohort.hasOne(adm_course_partners, { as: "adm_course_partner", foreignKey: "id_course_user_cohort"});
  adm_student_cohort.belongsTo(adm_course_cohort, { as: "id_cohort_adm_course_cohort", foreignKey: "id_cohort"});
  adm_course_cohort.hasMany(adm_student_cohort, { as: "adm_student_cohorts", foreignKey: "id_cohort"});
  adm_course_cohort.belongsTo(adm_courses, { as: "id_course_adm_course", foreignKey: "id_course"});
  adm_courses.hasMany(adm_course_cohort, { as: "adm_course_cohorts", foreignKey: "id_course"});
  adm_courses_requeriments.belongsTo(adm_courses, { as: "id_course_adm_course", foreignKey: "id_course"});
  adm_courses.hasMany(adm_courses_requeriments, { as: "adm_courses_requeriments", foreignKey: "id_course"});
  adm_prospects_preference.belongsTo(adm_courses, { as: "id_course_adm_course", foreignKey: "id_course"});
  adm_courses.hasMany(adm_prospects_preference, { as: "adm_prospects_preferences", foreignKey: "id_course"});
  adm_detailed_requeriment.belongsTo(adm_courses_requeriments, { as: "id_courses_requeriments_adm_courses_requeriment", foreignKey: "id_courses_requeriments"});
  adm_courses_requeriments.hasMany(adm_detailed_requeriment, { as: "adm_detailed_requeriments", foreignKey: "id_courses_requeriments"});
  adm_requeriment_fullfiment.belongsTo(adm_detailed_requeriment, { as: "id_detailed_req_adm_detailed_requeriment", foreignKey: "id_detailed_req"});
  adm_detailed_requeriment.hasMany(adm_requeriment_fullfiment, { as: "adm_requeriment_fullfiments", foreignKey: "id_detailed_req"});
  adm_course_partners.belongsTo(adm_partners, { as: "id_partners_adm_partner", foreignKey: "id_partners"});
  adm_partners.hasOne(adm_course_partners, { as: "adm_course_partner", foreignKey: "id_partners"});
  adm_prospect_stages.belongsTo(adm_prospects_preference, { as: "id_prospect_preference_adm_prospects_preference", foreignKey: "id_prospect_preference"});
  adm_prospects_preference.hasOne(adm_prospect_stages, { as: "adm_prospect_stage", foreignKey: "id_prospect_preference"});
  adm_requeriment_fullfiment.belongsTo(adm_prospects_preference, { as: "id_prospect_adm_prospects_preference", foreignKey: "id_prospect"});
  adm_prospects_preference.hasMany(adm_requeriment_fullfiment, { as: "adm_requeriment_fullfiments", foreignKey: "id_prospect"});
  adm_student_cohort.belongsTo(adm_prospects_preference, { as: "id_prospect_student_adm_prospects_preference", foreignKey: "id_prospect_student"});
  adm_prospects_preference.hasMany(adm_student_cohort, { as: "adm_student_cohorts", foreignKey: "id_prospect_student"});
  adm_prospects_preference.belongsTo(cv_personal_info, { as: "id_cv_user_cv_personal_info", foreignKey: "id_cv_user"});
  cv_personal_info.hasMany(adm_prospects_preference, { as: "adm_prospects_preferences", foreignKey: "id_cv_user"});
  adm_requeriment_fullfiment.belongsTo(main_files_manager, { as: "id_file_validation_main_files_manager", foreignKey: "id_file_validation"});
  main_files_manager.hasMany(adm_requeriment_fullfiment, { as: "adm_requeriment_fullfiments", foreignKey: "id_file_validation"});
  adm_prospect_stages.belongsTo(main_stage, { as: "id_stage_main_stage", foreignKey: "id_stage"});
  main_stage.hasOne(adm_prospect_stages, { as: "adm_prospect_stage", foreignKey: "id_stage"});
  auth_assignment_permissions.belongsTo(auth_permissions, { as: "id_permission_auth_permission", foreignKey: "id_permission"});
  auth_permissions.hasOne(auth_assignment_permissions, { as: "auth_assignment_permission", foreignKey: "id_permission"});
  auth_permissions_section.belongsTo(auth_permissions, { as: "id_permission_auth_permission", foreignKey: "id_permission"});
  auth_permissions.hasMany(auth_permissions_section, { as: "auth_permissions_sections", foreignKey: "id_permission"});
  auth_assignment_permissions.belongsTo(auth_roles, { as: "id_rol_auth_role", foreignKey: "id_rol"});
  auth_roles.hasMany(auth_assignment_permissions, { as: "auth_assignment_permissions", foreignKey: "id_rol"});
  auth_user_roles.belongsTo(auth_roles, { as: "id_role_auth_role", foreignKey: "id_role"});
  auth_roles.hasMany(auth_user_roles, { as: "auth_user_roles", foreignKey: "id_role"});
  auth_assignment_permissions.belongsTo(auth_sections, { as: "id_section_auth_section", foreignKey: "id_section"});
  auth_sections.hasMany(auth_assignment_permissions, { as: "auth_assignment_permissions", foreignKey: "id_section"});
  auth_permissions_section.belongsTo(auth_sections, { as: "id_section_auth_section", foreignKey: "id_section"});
  auth_sections.hasMany(auth_permissions_section, { as: "auth_permissions_sections", foreignKey: "id_section"});
  auth_users.belongsTo(auth_user_status, { as: "status_auth_user_status", foreignKey: "status"});
  auth_user_status.hasMany(auth_users, { as: "auth_users", foreignKey: "status"});
  auth_assignment_permissions.belongsTo(auth_users, { as: "id_user_auth_user", foreignKey: "id_user"});
  auth_users.hasMany(auth_assignment_permissions, { as: "auth_assignment_permissions", foreignKey: "id_user"});
  auth_user_roles.belongsTo(auth_users, { as: "id_user_auth_user", foreignKey: "id_user"});
  auth_users.hasMany(auth_user_roles, { as: "auth_user_roles", foreignKey: "id_user"});
  cv_personal_info.belongsTo(auth_users, { as: "id_user_auth_user", foreignKey: "id_user"});
  auth_users.hasMany(cv_personal_info, { as: "cv_personal_infos", foreignKey: "id_user"});
  cv_academic_info.belongsTo(cv_personal_info, { as: "id_cv_user_cv_personal_info", foreignKey: "id_cv_user"});
  cv_personal_info.hasMany(cv_academic_info, { as: "cv_academic_infos", foreignKey: "id_cv_user"});
  cv_languages_info.belongsTo(cv_personal_info, { as: "id_cv_user_cv_personal_info", foreignKey: "id_cv_user"});
  cv_personal_info.hasMany(cv_languages_info, { as: "cv_languages_infos", foreignKey: "id_cv_user"});
  cv_work_info.belongsTo(cv_personal_info, { as: "id_cv_user_cv_personal_info", foreignKey: "id_cv_user"});
  cv_personal_info.hasMany(cv_work_info, { as: "cv_work_infos", foreignKey: "id_cv_user"});
  cv_academic_info.belongsTo(main_city, { as: "id_inst_city_main_city", foreignKey: "id_inst_city"});
  main_city.hasMany(cv_academic_info, { as: "cv_academic_infos", foreignKey: "id_inst_city"});
  cv_personal_info.belongsTo(main_city, { as: "id_birth_city_main_city", foreignKey: "id_birth_city"});
  main_city.hasMany(cv_personal_info, { as: "cv_personal_infos", foreignKey: "id_birth_city"});
  cv_work_info.belongsTo(main_city, { as: "id_company_city_main_city", foreignKey: "id_company_city"});
  main_city.hasMany(cv_work_info, { as: "cv_work_infos", foreignKey: "id_company_city"});
  cv_academic_info.belongsTo(main_country, { as: "id_inst_country_main_country", foreignKey: "id_inst_country"});
  main_country.hasMany(cv_academic_info, { as: "cv_academic_infos", foreignKey: "id_inst_country"});
  cv_personal_info.belongsTo(main_country, { as: "id_birth_country_main_country", foreignKey: "id_birth_country"});
  main_country.hasMany(cv_personal_info, { as: "cv_personal_infos", foreignKey: "id_birth_country"});
  cv_academic_info.belongsTo(main_files_manager, { as: "id_acad_certf_main_files_manager", foreignKey: "id_acad_certf"});
  main_files_manager.hasMany(cv_academic_info, { as: "cv_academic_infos", foreignKey: "id_acad_certf"});
  cv_languages_info.belongsTo(main_files_manager, { as: "id_lang_certf_main_files_manager", foreignKey: "id_lang_certf"});
  main_files_manager.hasMany(cv_languages_info, { as: "cv_languages_infos", foreignKey: "id_lang_certf"});
  cv_personal_info.belongsTo(main_files_manager, { as: "id_cv_file_main_files_manager", foreignKey: "id_cv_file"});
  main_files_manager.hasMany(cv_personal_info, { as: "cv_personal_infos", foreignKey: "id_cv_file"});
  cv_personal_info.belongsTo(main_files_manager, { as: "id_photo_main_files_manager", foreignKey: "id_photo"});
  main_files_manager.hasMany(cv_personal_info, { as: "id_photo_cv_personal_infos", foreignKey: "id_photo"});
  cv_work_info.belongsTo(main_files_manager, { as: "id_work_certf_main_files_manager", foreignKey: "id_work_certf"});
  main_files_manager.hasMany(cv_work_info, { as: "cv_work_infos", foreignKey: "id_work_certf"});
  cv_languages_info.belongsTo(main_languages, { as: "id_language_main_language", foreignKey: "id_language"});
  main_languages.hasMany(cv_languages_info, { as: "cv_languages_infos", foreignKey: "id_language"});
  main_files_manager.belongsTo(auth_users, { as: "id_auth_user_auth_user", foreignKey: "id_auth_user"});
  auth_users.hasMany(main_files_manager, { as: "main_files_managers", foreignKey: "id_auth_user"});
  main_interview_schedule.belongsTo(auth_users, { as: "id_incharge_auth_user", foreignKey: "id_incharge"});
  auth_users.hasMany(main_interview_schedule, { as: "main_interview_schedules", foreignKey: "id_incharge"});
  main_state.belongsTo(main_country, { as: "id_country_main_country", foreignKey: "id_country"});
  main_country.hasMany(main_state, { as: "main_states", foreignKey: "id_country"});
  main_city.belongsTo(main_state, { as: "id_state_main_state", foreignKey: "id_state"});
  main_state.hasMany(main_city, { as: "main_cities", foreignKey: "id_state"});
  tt_tests_students.belongsTo(adm_prospects_preference, { as: "id_prospect_preferent_adm_prospects_preference", foreignKey: "id_prospect_preferent"});
  adm_prospects_preference.hasMany(tt_tests_students, { as: "tt_tests_students", foreignKey: "id_prospect_preferent"});
  tt_tests_students.belongsTo(auth_users, { as: "id_aut_user_auth_user", foreignKey: "id_aut_user"});
  auth_users.hasMany(tt_tests_students, { as: "tt_tests_students", foreignKey: "id_aut_user"});
  tt_bancks_questions.belongsTo(main_files_manager, { as: "id_img_question_main_files_manager", foreignKey: "id_img_question"});
  main_files_manager.hasMany(tt_bancks_questions, { as: "tt_bancks_questions", foreignKey: "id_img_question"});
  tt_options.belongsTo(main_files_manager, { as: "id_img_option_main_files_manager", foreignKey: "id_img_option"});
  main_files_manager.hasMany(tt_options, { as: "tt_options", foreignKey: "id_img_option"});
  tt_options.belongsTo(tt_bancks_questions, { as: "id_question_tt_bancks_question", foreignKey: "id_question"});
  tt_bancks_questions.hasMany(tt_options, { as: "tt_options", foreignKey: "id_question"});
  tt_bancks_questions.belongsTo(tt_difficulties_questions, { as: "id_difficulty_tt_difficulties_question", foreignKey: "id_difficulty"});
  tt_difficulties_questions.hasMany(tt_bancks_questions, { as: "tt_bancks_questions", foreignKey: "id_difficulty"});
  tt_difficulties_tests.belongsTo(tt_difficulties_questions, { as: "id_difficulty_tt_difficulties_question", foreignKey: "id_difficulty"});
  tt_difficulties_questions.hasMany(tt_difficulties_tests, { as: "tt_difficulties_tests", foreignKey: "id_difficulty"});
  tt_answers.belongsTo(tt_options, { as: "id_option_tt_option", foreignKey: "id_option"});
  tt_options.hasMany(tt_answers, { as: "tt_answers", foreignKey: "id_option"});
  tt_difficulties_tests.belongsTo(tt_tests, { as: "id_test_tt_test", foreignKey: "id_test"});
  tt_tests.hasMany(tt_difficulties_tests, { as: "tt_difficulties_tests", foreignKey: "id_test"});
  tt_tests_students.belongsTo(tt_tests, { as: "id_test_tt_test", foreignKey: "id_test"});
  tt_tests.hasMany(tt_tests_students, { as: "tt_tests_students", foreignKey: "id_test"});
  tt_answers.belongsTo(tt_tests_students, { as: "id_test_person_tt_tests_student", foreignKey: "id_test_person"});
  tt_tests_students.hasMany(tt_answers, { as: "tt_answers", foreignKey: "id_test_person"});
  tt_bancks_questions.belongsTo(tt_topics, { as: "id_topic_question_tt_topic", foreignKey: "id_topic_question"});
  tt_topics.hasMany(tt_bancks_questions, { as: "tt_bancks_questions", foreignKey: "id_topic_question"});
  tt_tests.belongsTo(tt_topics, { as: "id_topic_test_tt_topic", foreignKey: "id_topic_test"});
  tt_topics.hasMany(tt_tests, { as: "tt_tests", foreignKey: "id_topic_test"});

  return {
    adm_course_cohort,
    adm_course_partners,
    adm_courses,
    adm_courses_requeriments,
    adm_detailed_requeriment,
    adm_partners,
    adm_prospect_stages,
    adm_prospects_preference,
    adm_requeriment_fullfiment,
    adm_student_cohort,
    auth_assignment_permissions,
    auth_permissions,
    auth_permissions_section,
    auth_roles,
    auth_sections,
    auth_session,
    auth_user_roles,
    auth_user_status,
    auth_users,
    cv_academic_info,
    cv_languages_info,
    cv_personal_info,
    cv_work_info,
    main_city,
    main_country,
    main_files_manager,
    main_interview_schedule,
    main_languages,
    main_stage,
    main_state,
    tt_answers,
    tt_bancks_questions,
    tt_difficulties_questions,
    tt_difficulties_tests,
    tt_options,
    tt_tests,
    tt_tests_students,
    tt_topics,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
