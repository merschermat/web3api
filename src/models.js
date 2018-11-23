const User = require('./Schemas/User/User').User
const Bio = require('./Schemas/Bio/Bio').Bio
const Curriculum = require('./Schemas/Curriculum/Curriculum').Curriculum
const Degree = require('./Schemas/Degree/Degree').Degree
const Idiom = require('./Schemas/Idiom/Idioms').Idioms
const Interest = require('./Schemas/Interest/Interest').Interest
const Link = require('./Schemas/Link/Link').Link
const MinBio = require('./Schemas/MinBio/MinBio').MinBio
const More = require('./Schemas/More/More').More
const Photo = require('./Schemas/Photo/Photo').Photo
const Skills = require('./Schemas/Skills/Skills').Skills
const Portfolio = require('./Schemas/Portfolio/Portfolio').Portfolio
const Work = require('./Schemas/Work/Work').Work

module.exports = {
    Bio,
    Curriculum,
    Degree,
    Idiom,
    Interest,
    Link,
    MinBio,
    More,
    Photo,
    Skills,
    Portfolio,
    Work
}