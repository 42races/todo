json.array!(@bookmarks) do |bookmark|
  json.extract! bookmark, :title, :tags, :url, :description, :permission
  json.url bookmark_url(bookmark, format: :json)
end
