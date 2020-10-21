name = 'Davyd Felipe Medeiros do Nascimento'
skills = ['Web Development', 'Software Development',
          'Mobile Development', 'Design Patterns', 'Git', 'Agile Methodologies']
experiences = [
    ['Front-End Web Developer (02/2020 ~ 07/2020)', 'Englobar Assessoria'],
    ['Full-Stack Programmer (01/2018 ~ 01/2020)', 'i9 Empresarial']
]

experienceCount = 0
portifolioText = ''

for skill in skills:
    if experienceCount > 1:
        experienceCount = 0
        experienceText = ' '*44
        experiences.pop(0)
    elif len(experiences) > 0:
        experienceText = experiences[0][experienceCount] + \
            ((44 - len(experiences[0][experienceCount]))*' ')
        experienceCount += 1
    else:
        experienceText = ' '*44

    portifolioText += '''| {experience}| {skill}|
'''.format(experience=experienceText, skill=skill+((21 - len(skill))*' '))

print('''+--------------------------------------------------------------------+
|                {name}                 |
+---------------------------------------------+----------------------+
|                 Experiences                 |        Skills        |
| ------------------------------------------- | -------------------- |
{portifolio}
+---------------------------------------------+----------------------+'''
      .format(name=name, portifolio=portifolioText[:len(portifolioText)-1]))
