class Car
  def initialize # 建構子
    @brand = 'toyota'
  end
end
c = Car.new

class Object
  def peek
    p self
    self
  end
end

[1, 2, 3, 4, 5].map {|i| i + 1}
               .peek()
               .filter {|i| i % 2 == 0}
               .peek()


mapper = lambda { |number| (number + 2) * 100 }

ary = [1, 2, 3, 4 ,5]
p ary.map(&mapper)

# block = {|i| i * 2}
# ary.map {|i| i * 2}

# * , &
# ...
def foo(i, &lmb)
  lmb.(i + 1)
end

p foo(100) {|i| i * 2}

# js ...
def bar(*args)
  p args
end
bar(5, 6, 7, 8)