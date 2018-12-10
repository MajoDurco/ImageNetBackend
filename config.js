const config = {
  port: process.env.PORT || 8080,
  mongo: {
    atlasUrl: process.env.MONGO_ATLAS_URL
  }
}

module.exports = config