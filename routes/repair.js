const router = require("express").Router();
const Repair = require("../models/Repair");

//Get all repair details
router.get("/", async (req, res) => {
  try {
    await Repair.find({}, (error, result) => {
      if (error) return res.status(500).send(error);
      if (!result) return res.status(404).send("No results");

      return res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//Get one repair details
router.get("/:id", async (req, res) => {
  try {
    await Repair.findById({ _id: req.params.id }, (error, result) => {
      if (error) return res.status(500).send(error);
      if (!result) return res.status(400).send("No results");

      return res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//Add one employee
router.post("/", async (req, res) => {
  try {
    const {
      repairID,
      repairCost,
      repairBy,
      repairDate,
      repairDescription,
      repairMileage,
    } = req.body;

    const repair = new Repair({
      repairID,
      repairCost,
      repairBy,
      repairDate,
      repairDescription,
      repairMileage,
    });

    await repair.save((error, savedRepar) => {
      if (error) return res.status(500).send(error);
      return res.status(201).send(savedRepar);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//update an repair details
router.patch("/:id", async (req, res) => {
  try {
    await Repair.findById({ _id: req.params.id }, async (error, repair) => {
      if (error) return res.status(500).send(error);
      if (!repair) return res.status(404).send("User not found");

      const {
        repairID,
        repairCost,
        repairBy,
        repairDate,
        repairDescription,
        repairMileage,
      } = req.body;
      if (repairID) repair.repairID = repairID;
      if (repairCost) repair.repairCost = repairCost;
      if (repairBy) repair.repairBy = repairBy;
      if (repairDate) repair.repairDate = repairDate;
      if (repairDescription) repair.repairDescription = repairDescription;
      if (repairMileage) repair.repairMileage = repairMileage;

      await employee.save((error, savedRepar) => {
        if (error) return res.status(500).send(error);
        return res.status(201).send(savedRepar);
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

//Delete an employee
router.delete("/:id", async (req, res) => {
  try {
    await Repair.findById({ _id: req.params.id }, async (error, repair) => {
      if (error) return res.status(500).send(error);
      if (!repair) return res.status(404).send("User not found!");
      await repair.remove((err, removedRepair) => {
        if (error) return res.status(500).send(error);
        return res.status(200).send(removedRepair);
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
