const router = require("express").Router();
const PreviousOwner = require("../models/PreviousOwner");
const { syncIndexes } = require("../models/PreviousOwner");

//Get all the previous owner details
router.get("/", async (req, res) => {
  try {
    await PreviousOwner.find({}, (error, result) => {
      if (error) return res.status(500).send(error);
      if (!result) return res.status(404).send("No result");
      return res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//Search and get previous owner details
router.get("/:id", async (req, res) => {
  try {
    await PreviousOwner.findById({ _id: req.params.id }, (error, result) => {
      if (err) return res.status(500).send(error);
      if (!result) return res.status(400).send("No results");

      return res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//Add new previous owner details
router.post("/", async (req, res) => {
  try {
    const { NIC, PreviousOwnerName, contactNumber, address } = req.body;

    const previousOwner = new PreviousOwner({
      NIC,
      PreviousOwnerName,
      contactNumber,
      address,
    });

    await previousOwner.save((error, savedOwner) => {
      if (error) return res.status(500).send(error);
      return res.status(201).send(savedOwner);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//Update owner details
router.patch("/:id", async (req, res) => {
  try {
    await PreviousOwner.findById(
      { _id: req.params.id },
      async (error, previousOwner) => {
        if (error) return res.status(500).send(error);
        if (!previousOwner) return res.status(404).send("User not found");

        const { NIC, PreviousOwnerName, contactNumber, address } = req.body;
        if (NIC) previousOwner.NIC = NIC;
        if (PreviousOwnerName)
          previousOwner.PreviousOwnerName = PreviousOwnerName;
        if (contactNumber) previousOwner.contactNumber = contactNumber;
        if (address) previousOwner.address = address;

        await employee.save((error, savedOwner) => {
          if (error) return res.status(500).send(err);
          return res.status(201).send(savedOwner);
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//Delete an previus owner details
router.delete("/:id", async (req, res) => {
  try {
    await PreviousOwner.findById(
      { _id: req.params.id },
      async (error, employee) => {
        if (error) return res.status(500).send(error);
        if (!employee) return res.status(404).send("User not found!");
        await employee.remove((error, removedOwner) => {
          if (error) return res.status(500).send(err);
          return res.status(200).send(removedOwner);
        });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
