const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const CharacterModel = require('./Character');
const LocationModel = require('./Location');
const OrganizationModel = require('./Organization');
const OrganizationMemberModel = require('./OrganizationMember');
const DevilFruitModel = require('./DevilFruit');
const CharacterDevilFruitModel = require('./CharacterDevilFruit');
const HakiModel = require('./Haki');
const CharacterHakiModel = require('./CharacterHaki');
const AnimeModel = require('./Anime');
const EpisodeModel = require('./Episode');
const MangaModel = require('./Manga');
const ChapterModel = require('./Chapter');
const CharacterEpisodeModel = require('./CharacterEpisode');
const CharacterChapterModel = require('./CharacterChapter');
const SagaModel = require('./Saga');
const StoryArcModel = require('./StoryArc');
const WriterModel = require('./Writer');

const Character = CharacterModel(sequelize, Sequelize.DataTypes);
const Location = LocationModel(sequelize, Sequelize.DataTypes);
const Organization = OrganizationModel(sequelize, Sequelize.DataTypes);
const OrganizationMember = OrganizationMemberModel(sequelize, Sequelize.DataTypes);
const DevilFruit = DevilFruitModel(sequelize, Sequelize.DataTypes);
const CharacterDevilFruit = CharacterDevilFruitModel(sequelize, Sequelize.DataTypes);
const Haki = HakiModel(sequelize, Sequelize.DataTypes);
const CharacterHaki = CharacterHakiModel(sequelize, Sequelize.DataTypes);
const Anime = AnimeModel(sequelize, Sequelize.DataTypes);
const Episode = EpisodeModel(sequelize, Sequelize.DataTypes);
const Manga = MangaModel(sequelize, Sequelize.DataTypes);
const Chapter = ChapterModel(sequelize, Sequelize.DataTypes);
const CharacterEpisode = CharacterEpisodeModel(sequelize, Sequelize.DataTypes);
const CharacterChapter = CharacterChapterModel(sequelize, Sequelize.DataTypes);
const Saga = SagaModel(sequelize, Sequelize.DataTypes);
const StoryArc = StoryArcModel(sequelize, Sequelize.DataTypes);
const Writer = WriterModel(sequelize, Sequelize.DataTypes);

Location.hasMany(Character, { foreignKey: 'location_id' });
Character.belongsTo(Location, { foreignKey: 'location_id' });

Organization.belongsToMany(Character, {
  through: OrganizationMember,
  foreignKey: 'organization_id',
  otherKey: 'character_id',
});
Character.belongsToMany(Organization, {
  through: OrganizationMember,
  foreignKey: 'character_id',
  otherKey: 'organization_id',
});

Character.belongsToMany(DevilFruit, {
  through: CharacterDevilFruit,
  foreignKey: 'character_id',
  otherKey: 'fruit_id',
});
DevilFruit.belongsToMany(Character, {
  through: CharacterDevilFruit,
  foreignKey: 'fruit_id',
  otherKey: 'character_id',
});


Character.belongsToMany(Haki, {
  through: CharacterHaki,
  foreignKey: 'character_id',
  otherKey: 'haki_id',
});
Haki.belongsToMany(Character, {
  through: CharacterHaki,
  foreignKey: 'haki_id',
  otherKey: 'character_id',
});


Anime.hasMany(Episode, { foreignKey: 'anime_id' });
Episode.belongsTo(Anime, { foreignKey: 'anime_id' });

Manga.hasMany(Chapter, { foreignKey: 'manga_id' });
Chapter.belongsTo(Manga, { foreignKey: 'manga_id' });

Saga.hasMany(StoryArc, { foreignKey: 'saga_id' });
StoryArc.belongsTo(Saga, { foreignKey: 'saga_id' });

StoryArc.hasMany(Episode, { foreignKey: 'arc_id' });
Episode.belongsTo(StoryArc, { foreignKey: 'arc_id' });

StoryArc.hasMany(Chapter, { foreignKey: 'arc_id' });
Chapter.belongsTo(StoryArc, { foreignKey: 'arc_id' });

Character.belongsToMany(Episode, {
  through: CharacterEpisode,
  foreignKey: 'character_id',
  otherKey: 'episode_id',
});
Episode.belongsToMany(Character, {
  through: CharacterEpisode,
  foreignKey: 'episode_id',
  otherKey: 'character_id',
});


Character.belongsToMany(Chapter, {
  through: CharacterChapter,
  foreignKey: 'character_id',
  otherKey: 'chapter_id',
});
Chapter.belongsToMany(Character, {
  through: CharacterChapter,
  foreignKey: 'chapter_id',
  otherKey: 'character_id',
});

module.exports = {
  sequelize,
  Sequelize,
  Character,
  Location,
  Organization,
  OrganizationMember,
  DevilFruit,
  CharacterDevilFruit,
  Haki,
  CharacterHaki,
  Anime,
  Episode,
  Manga,
  Chapter,
  CharacterEpisode,
  CharacterChapter,
  Saga,
  StoryArc,
  Writer,
};
