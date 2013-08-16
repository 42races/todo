json.array!(@bookmarks) do |bookmark|
  json.extract! bookmark, :id, :title, :tags, :bm_url, :description, :permission
  json.url bookmark_url(bookmark, format: :json)
end
