socialdb = new Mongo.Collection("social");

socialdb.allow({
    insert(userId, doc) {
      // The user must be logged in and the document must be owned by the user.
    //   return userId && doc.owner === userId;
    return true;
    },
  
    update(userId, doc, fields, modifier) {
      // Can only change your own documents.
    //   return doc.owner === userId;
    return true;
    },
  
    remove(userId, doc) {
      // Can only remove your own documents.
    //   return doc.owner === userId;
      return true;
    },
  
    fetch: ['owner']
  });