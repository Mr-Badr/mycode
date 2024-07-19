export const fetchData = async (endpoint, filterBy, filterValue) => {
  const fakeData = {
    levels: [
      { slug: 'level1', name: 'المستوى الأولي باك', description: 'المستوى الأولي باك في الرياضيات والعلوم الفيزيائية' },
      { slug: 'level2', name: 'المستوى الثانية باك', description: 'المستوى الثانية باك في الرياضيات والعلوم الفيزيائية' },
      { slug: 'level3', name: 'المستوى الثالثة باك', description: 'المستوى الثالثة باك في الرياضيات والعلوم الفيزيائية' },
    ],
    classes: [
      { slug: 'class1', levelSlug: 'level1', name: 'قسم الرياضيات', description: 'دروس الرياضيات بما في ذلك الفيزياء والفلسفة' },
      { slug: 'class2', levelSlug: 'level1', name: 'قسم الفيزياء', description: 'دروس الفيزياء بما في ذلك المحاضرات والتمارين العملية' },
      { slug: 'class3', levelSlug: 'level2', name: 'قسم علم الأحياء', description: 'دروس علم الأحياء بما في ذلك الوراثة والتطور' },
      { slug: 'class4', levelSlug: 'level2', name: 'قسم الكيمياء', description: 'دروس الكيمياء العضوية والتفاعلات الكيميائية' },
      { slug: 'class5', levelSlug: 'level3', name: 'قسم الفلسفة', description: 'دروس في الفلسفة بما في ذلك الأخلاقيات والميتافيزيقا' },
      { slug: 'class6', levelSlug: 'level3', name: 'قسم الجغرافيا', description: 'دروس في الجغرافيا الطبيعية والبشرية' },
      // Add more classes as needed
    ],
    subjects: [
      { slug: 'algebra', classSlug: 'class1', name: 'الجبر', description: 'الجبر والمتطابقات العامة' },
      { slug: 'geometry', classSlug: 'class1', name: 'الهندسة الفضائية', description: 'الهندسة الفضائية والتحليل' },
      { slug: 'physics', classSlug: 'class2', name: 'الفيزياء', description: 'دروس متقدمة في الفيزياء بما في ذلك الديناميكا والكهرومغناطيسية' },
      { slug: 'chemistry', classSlug: 'class4', name: 'الكيمياء', description: 'الكيمياء العضوية والمعادلات التفاعلية' },
      { slug: 'biology', classSlug: 'class3', name: 'علم الأحياء', description: 'علم الأحياء الخلوي والجزيئي' },
      { slug: 'philosophy', classSlug: 'class5', name: 'الفلسفة', description: 'الفلسفة والميتافيزيقا' },
      { slug: 'geography', classSlug: 'class6', name: 'الجغرافيا', description: 'الجغرافيا الطبيعية والبشرية' },
      // Add more subjects as needed
    ],
    courses: [
      { slug: 'course1', subjectSlug: 'algebra', name: 'مدخل إلى الجبر', description: 'دورة تعليمية في الجبر للمبتدئين' },
      { slug: 'course2', subjectSlug: 'algebra', name: 'الجبر المتقدم', description: 'دورة متقدمة في الجبر تشمل المتطابقات العامة والأعداد المركبة' },
      { slug: 'course3', subjectSlug: 'geometry', name: 'الهندسة الفضائية للمبتدئين', description: 'دورة في الهندسة الفضائية تعرض المفاهيم الأساسية' },
      { slug: 'course4', subjectSlug: 'geometry', name: 'تحليل الهندسة الفضائية', description: 'دورة تفصيلية في تحليل الهندسة الفضائية والمعادلات الفراغية' },
      { slug: 'course5', subjectSlug: 'physics', name: 'الفيزياء الحديثة', description: 'دورة في الفيزياء الحديثة تتناول النظرية النسبية والكميات النانوية' },
      { slug: 'course6', subjectSlug: 'physics', name: 'الديناميكا الفيزيائية', description: 'دورة في الديناميكا الفيزيائية والحركة الجسمانية' },
      { slug: 'course7', subjectSlug: 'chemistry', name: 'الكيمياء العضوية', description: 'دورة في الكيمياء العضوية والروابط الكيميائية' },
      { slug: 'course8', subjectSlug: 'chemistry', name: 'التفاعلات الكيميائية', description: 'دورة في التفاعلات الكيميائية والتحفيز الحراري' },
      { slug: 'course9', subjectSlug: 'biology', name: 'الجينوم والوراثة', description: 'دورة في الجينوم والوراثة الجزيئية' },
      { slug: 'course10', subjectSlug: 'biology', name: 'الخلايا والأنسجة', description: 'دورة في علم الأحياء الخلوي والأنسجة الحيوية' },
      { slug: 'course11', subjectSlug: 'philosophy', name: 'فلسفة الأخلاق', description: 'دورة في فلسفة الأخلاق والأخلاقيات الحديثة' },
      { slug: 'course12', subjectSlug: 'philosophy', name: 'الميتافيزيقا', description: 'دورة في الميتافيزيقا والفلسفة الأنتولوجية' },
      { slug: 'course13', subjectSlug: 'geography', name: 'الجغرافيا الطبيعية', description: 'دورة في الجغرافيا الطبيعية والتكوين الجيولوجي' },
      { slug: 'course14', subjectSlug: 'geography', name: 'الجغرافيا البشرية', description: 'دورة في الجغرافيا البشرية وتأثير العوامل البيئية' },
      { slug: 'course15', subjectSlug: 'algebra', name: 'الجبر المتقدم جداً', description: 'دورة متقدمة في الجبر تشمل المتطابقات العامة والتفاعلات الكمية' },
      { slug: 'course16', subjectSlug: 'geometry', name: 'الهندسة الفضائية المتقدمة', description: 'دورة متقدمة في الهندسة الفضائية والتحليل الفراغي' },
      { slug: 'course17', subjectSlug: 'physics', name: 'الفيزياء النظرية', description: 'دورة في الفيزياء النظرية والميكانيكا الكمية' },
      { slug: 'course18', subjectSlug: 'chemistry', name: 'الكيمياء الحيوية', description: 'دورة في الكيمياء الحيوية والأحماض النووية' },
      { slug: 'course19', subjectSlug: 'biology', name: 'علم الأحياء التطبيقي', description: 'دورة في علم الأحياء التطبيقي والأبحاث الجزيئية' },
      { slug: 'course20', subjectSlug: 'philosophy', name: 'فلسفة العقل', description: 'دورة في فلسفة العقل والنظرية الفلسفية' },
      { slug: 'course21', subjectSlug: 'geography', name: 'الجغرافيا السياسية', description: 'دورة في الجغرافيا السياسية والدراسات البيئية' },
      // Add more courses as needed
    ],
    content: [
      { slug: 'lesson1', courseSlug: 'course1', name: 'درس الجبر الأول', description: 'درس تمهيدي في الجبر' },
      { slug: 'lesson2', courseSlug: 'course1', name: 'درس الجبر المتقدم', description: 'درس متقدم في الجبر يغطي المتطابقات العامة' },
      { slug: 'lesson3', courseSlug: 'course2', name: 'مبادئ المتطابقات العامة', description: 'مبادئ الجبر المتطابقات العامة' },
      { slug: 'lesson4', courseSlug: 'course2', name: 'الأعداد المركبة', description: 'الأعداد المركبة في الجبر' },
      { slug: 'lesson5', courseSlug: 'course3', name: 'مقدمة في الهندسة الفضائية', description: 'مقدمة تعريفية في الهندسة الفضائية' },
      { slug: 'lesson6', courseSlug: 'course3', name: 'المفاهيم الأساسية في الهندسة الفضائية', description: 'المفاهيم الأساسية لتحليل الهندسة الفضائية' },
      { slug: 'lesson7', courseSlug: 'course4', name: 'المعادلات الفراغية', description: 'المعادلات الفراغية في تحليل الهندسة الفضائية' },
      { slug: 'lesson8', courseSlug: 'course4', name: 'التحليل الفضائي المتقدم', description: 'التحليل الفضائي المتقدم والمعادلات التفاضلية' },
      { slug: 'lesson9', courseSlug: 'course5', name: 'نظرية النسبية', description: 'نظرية النسبية في الفيزياء الحديثة' },
      { slug: 'lesson10', courseSlug: 'course5', name: 'الكميات النانوية', description: 'الكميات النانوية وتطبيقاتها في الفيزياء' },
      { slug: 'lesson11', courseSlug: 'course6', name: 'الديناميكا الفيزيائية الأساسية', description: 'الديناميكا الفيزيائية الأساسية والقوى المتفاعلة' },
      { slug: 'lesson12', courseSlug: 'course6', name: 'الحركة الجسمانية', description: 'الحركة الجسمانية والتطبيقات الفيزيائية' },
      { slug: 'lesson13', courseSlug: 'course7', name: 'الكيمياء العضوية الأساسية', description: 'الكيمياء العضوية الأساسية والتفاعلات الكيميائية' },
      { slug: 'lesson14', courseSlug: 'course7', name: 'الروابط الكيميائية', description: 'الروابط الكيميائية وأنواعها في الكيمياء العضوية' },
      { slug: 'lesson15', courseSlug: 'course8', name: 'تفاعلات الكيمياء الحرارية', description: 'تفاعلات الكيمياء الحرارية والتحفيز الحراري' },
      { slug: 'lesson16', courseSlug: 'course8', name: 'التفاعلات الكيميائية المتقدمة', description: 'التفاعلات الكيميائية المتقدمة والتحفيز الكيميائي' },
      { slug: 'lesson17', courseSlug: 'course9', name: 'الجينوم الأساسي', description: 'الجينوم الأساسي والتركيب الجزيئي' },
      { slug: 'lesson18', courseSlug: 'course9', name: 'الوراثة الجزيئية', description: 'الوراثة الجزيئية وتطبيقاتها البيولوجية' },
      { slug: 'lesson19', courseSlug: 'course10', name: 'علم الأحياء الخلوي', description: 'علم الأحياء الخلوي والبنية الخلوية' },
      { slug: 'lesson20', courseSlug: 'course10', name: 'الأنسجة الحيوية', description: 'الأنسجة الحيوية ووظائفها الحيوية' },
      { slug: 'lesson21', courseSlug: 'course11', name: 'الأخلاق والأخلاقيات', description: 'الأخلاق والأخلاقيات الحديثة في الفلسفة' },
      { slug: 'lesson22', courseSlug: 'course11', name: 'الفلسفة الأنتولوجية', description: 'الفلسفة الأنتولوجية والميتافيزيقا' },
      { slug: 'lesson23', courseSlug: 'course12', name: 'الميتافيزيقا الفلسفية', description: 'الميتافيزيقا الفلسفية والأنتولوجيا' },
      { slug: 'lesson24', courseSlug: 'course12', name: 'الفلسفة الأنتولوجية الحديثة', description: 'الفلسفة الأنتولوجية الحديثة والميتافيزيقا' },
      { slug: 'lesson25', courseSlug: 'course13', name: 'الجغرافيا الطبيعية المتقدمة', description: 'الجغرافيا الطبيعية المتقدمة والعمل الميداني' },
      { slug: 'lesson26', courseSlug: 'course13', name: 'الجيولوجيا البيئية', description: 'الجيولوجيا البيئية والأبحاث البيئية' },
      { slug: 'lesson27', courseSlug: 'course14', name: 'الجغرافيا السياسية الحديثة', description: 'الجغرافيا السياسية الحديثة والدراسات الدولية' },
      { slug: 'lesson28', courseSlug: 'course14', name: 'العلاقات الدولية', description: 'العلاقات الدولية والجيوسياسية الحديثة' },
      { slug: 'lesson29', courseSlug: 'course15', name: 'السياسة الدولية الحديثة', description: 'السياسة الدولية الحديثة والسلام العالمي' },
      { slug: 'lesson30', courseSlug: 'course15', name: 'الأمن الدولي', description: 'الأمن الدولي والتحديات العالمية المعاصرة' },
      { slug: 'lesson31', courseSlug: 'course16', name: 'التحليل الفضائي المتقدم', description: 'التحليل الفضائي المتقدم والنظريات الفراغية' },
      { slug: 'lesson32', courseSlug: 'course16', name: 'المفاهيم الرياضية في الهندسة الفضائية', description: 'المفاهيم الرياضية في الهندسة الفضائية والتحليل الفضائي' },
      { slug: 'lesson33', courseSlug: 'course17', name: 'الفيزياء النظرية الحديثة', description: 'الفيزياء النظرية الحديثة والمبادئ الفيزيائية الأساسية' },
      { slug: 'lesson34', courseSlug: 'course17', name: 'التحليل الكمي', description: 'التحليل الكمي والنظريات الكمية الحديثة' },
      { slug: 'lesson35', courseSlug: 'course18', name: 'الكيمياء الحيوية المتقدمة', description: 'الكيمياء الحيوية المتقدمة والتفاعلات البيولوجية' },
      { slug: 'lesson36', courseSlug: 'course18', name: 'الأحماض النووية', description: 'الأحماض النووية والتفاعلات الكيميائية الحيوية' },
      { slug: 'lesson37', courseSlug: 'course19', name: 'الأبحاث الجزيئية', description: 'الأبحاث الجزيئية في علم الأحياء التطبيقي' },
      { slug: 'lesson38', courseSlug: 'course19', name: 'التحليل البيولوجي', description: 'التحليل البيولوجي والتطبيقات الجزيئية' },
      { slug: 'lesson39', courseSlug: 'course20', name: 'الفلسفة العقلية الحديثة', description: 'الفلسفة العقلية الحديثة والمبادئ الفلسفية' },
      { slug: 'lesson40', courseSlug: 'course20', name: 'النظريات الفلسفية المتقدمة', description: 'النظريات الفلسفية المتقدمة والمفاهيم الأساسية' },
      { slug: 'lesson41', courseSlug: 'course21', name: 'الجغرافيا السياسية الحديثة', description: 'الجغرافيا السياسية الحديثة والتحليل البيئي' },
      { slug: 'lesson42', courseSlug: 'course21', name: 'الدراسات البيئية', description: 'الدراسات البيئية والتحليل الجغرافي' },
      // Add more lessons as needed
    ],
  };

  if (!filterBy || !filterValue) {
    return fakeData[endpoint] || [];
  }

  return fakeData[endpoint].filter(item => item[filterBy] === filterValue) || [];
};
