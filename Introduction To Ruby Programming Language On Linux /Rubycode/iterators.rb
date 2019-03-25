grocery_items = {"oranges" => false, "bananas" => false}
puts "Do you need:"
grocery_items.each do | item, need_for_item |
  puts item + "?(Y/N)"
  case gets
    when "Y\n", "y\n"
      grocery_items[item]= true
    when "N\n", "n\n"
      grocery_items[item]= false
end
end
puts "Here's your list:"
grocery_items.each do | item, need_for_item |
  puts item if need_for_item
end