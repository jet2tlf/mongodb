# MongoDB Wrapper

This resource is a simple MongoDB wrapper for [FiveM](https://fivem.net/). It's running with MongoDB Node Driver.

## Installation

1. Clone this repository to `resources/mongodb` folder.
2. Copy `mongodb/database.cfg` to your server root directory.
3. Add the following lines to your server config:
```
set mongoCredentials "mongodb://yourhost:27017/yourdb"
```
3. Set your host and db

## Usage

Every callback accepts `result<object>` as it's first argument. If the execution is successful, a table with some information will be removed, if it is not successful, it will return null

Example (Lua):
```lua
local result = exports["mongodb"]:findOne({ collection = "products" }, function(result)
    if not result then return

    print("The first product is: "..result.name)
end)
```

## exports["mongodb"]:insertOne(params, callback)
* `params<Object>` - params object
* `params.collection<string>` - collection name
* `params.document<Object>` - document object
* `params.options<Object>` - optional settings object. See [insertOne in docs](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/)
* `callback(result<Array>)` - callback (optional)

Inserts a single document into MongoDB.

## exports["mongodb"]:insertMany(params, callback)
* `params<Object>` - params object
* `params.collection<string>` - collection name
* `params.documents<Object>` - an array of documents to insert
* `params.options<Object>` - optional settings object. See [insertMany in docs](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertMany/)
* `callback(result<Array>)` - callback (optional)

Inserts an array of documents into MongoDB.

## exports["mongodb"]:findOne(params, callback)

* `params<Object>` - params object
* `params.collection<string>` - collection name
* `params.query<Object>` - filter query object
* `params.options<Object>` - optional settings object. See [findOne in docs](https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/)
* `callback(result<Array>)` - callback (optional)

Performns a find query with `limit = 1`.

## exports["mongodb"]:findMany(params, callback)

* `params<Object>` - params object
* `params.collection<string>` - collection name
* `params.query<Object>` - filter query object
* `params.options<Object>` - optional settings object. See [findMany in docs](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/)
* `callback(result<Array>)` - callback (optional)

Performs a find query.

## exports["mongodb"]:updateOne(params, callback)

* `params<Object>` - params object
* `params.collection<string>` - collection name
* `params.query<Object>` - filter query object
* `params.update<Object>` - update query object
* `params.options<Object>` - optional settings object. See [updateOne in docs](https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/)
* `callback(result<Array>)` - callback (optional)

Update a single document on MongoDB.

## exports["mongodb"]:updateMany(params, callback)

* `params<Object>` - params object
* `params.collection<string>` - collection name
* `params.query<Object>` - filter query object
* `params.update<Object>` - update query object
* `params.options<Object>` - optional settings object. See [updateMany in docs](https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateMany/)
* `callback(result<Array>)` - callback (optional)

Update multiple documents on MongoDB.

## exports["mongodb"]:deleteOne(params, callback)

* `params<Object>` - params object
* `params.collection<string>` - collection name
* `params.query<Object>` - filter query object
* `params.options<Object>` - optional settings object. See [deleteOne in docs](https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/)
* `callback(result<Array>)` - callback (optional)

Delete a single document on MongoDB.

## exports["mongodb"]:deleteMany(params, callback)

* `params<Object>` - params object
* `params.collection<string>` - collection name
* `params.query<Object>` - filter query object
* `params.options<Object>` - optional settings object. See [deleteMany in docs](https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteMany/)
* `callback(result<Array>)` - callback (optional)

Delete multiple documents on MongoDB.

## More documentation coming soon