const ListModel = require("../model/list");

const create = async (req, res) => {
  console.log("Creating a list");

  let body = req.body;

  let title = body["title"];
  let description = body["description"];
  let price = body["price"];

  let list = {
    title,
    description,
    price,
  };

  let user = await ListModel.create(list);
  return res.status(200).send(user);
};

const read = async (req, res) => {
  let lists = await ListModel.find({});
  res.status(200).send(lists);
};

const update  = async (req, res) => {
    let body = req.body
    let id = body["id"]
    let title = body["title"];
    let description = body["description"];
    let price = body["price"]

    
  let list = {
    title,
    description,
    price,
  };
  await ListModel.updateOne({"_id": id}, list);
  res.status(200).send("List Updated");
}


const del = async (req, res) => {
    let body = req.body
    let id = body["id"]
    await ListModel.deleteOne({"_id": id})
    res.status(200).send("List Deleted");
    console.log("List deleted")
}
module.exports = {
  create,
  read,
  del,
  update
};
