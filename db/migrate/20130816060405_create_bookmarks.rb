class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.string :title
      t.string :tags
      t.string :bm_url
      t.text :description
      t.string :permission

      t.timestamps
    end
  end
end
