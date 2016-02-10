/**
 * Created by eliezerencarnacion on 2/9/16.
 */
//JS does not have Interfaces, but I just wanted to write somewhere what interface I expect
//a storage provider to have

var StorageProvider = {
    getUploadUrl: function() {},
    putObject: function() {},
    getObject: function() {},
    updateObject: function() {},
    deleteObject: function() {}
}