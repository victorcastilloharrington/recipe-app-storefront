import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Chip,
} from "@mui/material";

const RecipeFormComponent = () => {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/*TODO:Image drag and drop*/}
          Image Upload
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="title"
            name="title"
            required
            fullWidth
            id="title"
            label="Title"
            autoFocus
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            fullWidth
            id="time"
            label="Time (In Minutes)"
            name="time"
            autoComplete="time"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            fullWidth
            id="price"
            label="Price (In USD)"
            name="price"
            autoComplete="price"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel id="ingredients-label" required>
            Ingredients
          </InputLabel>
          <Select
            required
            name="ingredients"
            fullWidth
            labelId="ingredients-label"
            id="ingredients"
            multiple
            value={["Ingredient 1"]}
            onChange={() => {}}
          >
            {["Ingredient 1", "Ingredient 2"].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
            <Chip
              color="primary"
              label="Ingredient 1"
              variant="outlined"
              onClick={() => {}}
              onDelete={() => {}}
            />
            <Chip
              label="Ingredient 2"
              variant="outlined"
              color="primary"
              onClick={() => {}}
              onDelete={() => {}}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <InputLabel id="tags-label" required>
            Tags
          </InputLabel>
          <Select
            required
            name="tags"
            fullWidth
            labelId="tags-label"
            id="tags"
            multiple
            value={["a"]}
            onChange={() => {}}
          >
            {["a", "b"].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
            <Chip
              color="primary"
              label="Tag 1"
              variant="outlined"
              onClick={() => {}}
              onDelete={() => {}}
            />
            <Chip
              label="Tag 2"
              variant="outlined"
              color="primary"
              onClick={() => {}}
              onDelete={() => {}}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="is_private" color="primary" />}
            label="I want to make this recipe private."
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Create Recipe
      </Button>
    </Box>
  );
};

export default RecipeFormComponent;
