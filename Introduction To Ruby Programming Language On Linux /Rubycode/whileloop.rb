pets = ["cats", "dogs", "ducks", "chickens", "fish"]
pet_index = 0
while pet_index < pets.count do
  if pets[pet_index] == "ducks" || pets[pet_index] == "chickens"
    pets[pet_index] = nil
    puts pet_index
  end
  pet_index += 1
end
