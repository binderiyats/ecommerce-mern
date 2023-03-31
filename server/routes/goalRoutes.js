import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get goal" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Set goal" });
});

router.patch("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update goal ${id}` });
});

export default router;
