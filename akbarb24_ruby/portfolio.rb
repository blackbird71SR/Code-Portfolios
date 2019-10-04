
person = {
  name: "Akbar Binaji",
  title: "Software Developer",
  skills: ["Backend Development", "Web Development", "Database Development"]
}

person.each do |key, value|
  if value.is_a?(Array)
    puts "#{key} : "
    value.each do |v| puts " - #{v}" end
  else
    puts "#{key} : #{value}"
  end
end




