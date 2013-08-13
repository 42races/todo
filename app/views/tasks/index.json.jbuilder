json.array!(@tasks) do |task|
  json.extract! task, :item, :status
  json.url task_url(task, format: :json)
end
